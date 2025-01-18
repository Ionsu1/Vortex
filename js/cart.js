customElements.get("cart-remove")||customElements.define("cart-remove",class extends HTMLElement{constructor(){super(),this.addEventListener("click",event=>{event.preventDefault();const cartItems=this.closest("cart-items");cartItems&&cartItems.updateQuantity(this.dataset.index,0)})}}),customElements.get("cart-items")||customElements.define("cart-items",class extends HTMLElement{constructor(){super(),this.debouncedOnChange=throttle(this.onChange.bind(this),ON_CHANGE_DEBOUNCE_TIMER),this.addEventListener("change",this.debouncedOnChange),this.sectionId=this.dataset.section,this.inDrawer=this.hasAttribute("data-in-drawer"),this.inDrawer&&(this.drawerTrap=this.closest("[data-trap]")),this.lineItemStatusElement=document.getElementById(`Cart-Line-Item-Status-${this.sectionId}`),this.cartItemsContainer=document.getElementById(`Cart-Items-${this.sectionId}`),this.hasAttribute("data-gift-wrap-id")&&parseInt(this.dataset.giftWrapQuantity)!==parseInt(this.dataset.itemQuantity)&&this.updateQuantity(this.dataset.giftWrapIndex,this.dataset.itemQuantity,null,this.dataset.giftWrapId)}onChange(event){this.updateQuantity(event.target.dataset.index,event.target.value,document.activeElement,event.target.dataset.quantityVariantId)}updateQuantity(line,quantity,focusableElement,variantId){this.enableLoading(line);const body=JSON.stringify({line,quantity,sections:this.getSectionsToRender().map(section=>section.section),sections_url:window.location.pathname});fetch(window.routes.cart_change_url,{...fetchConfig(),body}).then(response=>response.json()).then(responseJson=>{if(responseJson.errors)return this.restoreLineItemQuantityInputs(line),this.showError(responseJson.errors);const updatedValue=responseJson.items[line-1]?responseJson.items[line-1].quantity:void 0;let message="";if(this.querySelectorAll(".cart-item").length===responseJson.items.length&&updatedValue!==parseInt(quantity))return typeof updatedValue>"u"?message=window.cartStrings.error:message=window.cartStrings.quantityError.replace("[quantity]",updatedValue),this.restoreLineItemQuantityInputs(line),this.showError(message);const giftWrapLine=this.dataset.giftWrapIndex,giftWrapping=document.getElementById(`Cart-Gift-Wrapping-${this.sectionId}`);if(giftWrapping&&giftWrapLine!=null&&giftWrapLine!==line){const item_quantity=responseJson.item_count-parseInt(this.dataset.giftWrapQuantity);item_quantity>0?this.updateQuantity(giftWrapLine,item_quantity,focusableElement,variantId):giftWrapping.removeWrapping()}else this.handleCartUpdate(responseJson,variantId,focusableElement)}).catch(error=>{this.showError(window.cartStrings.error)}).finally(()=>{this.disableLoading(line)})}handleCartUpdate(responseJson,variantId,focusableElement){SectionDynamicUpdate.updateSections(this.getSectionsToRender(),responseJson.sections),this.drawerTrap?trapFocus(this.drawerTrap,focusableElement):focusableElement&&focusableElement.focus(),publish(PUB_SUB_EVENTS.cartUpdate,{source:"cart-items",productVariantId:variantId,cartData:responseJson})}restoreLineItemQuantityInputs(line){if(!line)return;this.querySelectorAll(`.quantity-input[data-index='${line}']`).forEach(input=>{input.value=input.getAttribute("value")})}getSectionsToRender(){const sections=[{id:"Cart-Icon-Bubble",section:"cart-icon-bubble",selector:".shopify-section"}];return this.inDrawer?sections.push({id:"Cart-Drawer",section:this.sectionId,selector:"#Cart-Drawer-Details"}):sections.push({id:"Main-Cart",section:this.sectionId,selector:"#Main-Cart-Details"}),sections}showError(message=null){message&&popToast(message,"error")}enableLoading(line=null){if(this.cartItemsContainer.classList.add("cart-items--disabled"),line){const cartItemElement=this.querySelector(`#Cart-Item-${this.sectionId}-${line}`);if(!cartItemElement)return;cartItemElement.classList.add("loading")}document.activeElement.blur(),this.lineItemStatusElement.setAttribute("aria-hidden","false")}disableLoading(line=null){if(this.cartItemsContainer.classList.remove("cart-items--disabled"),line){const cartItemElement=this.querySelector(`#Cart-Item-${this.sectionId}-${line}`);if(!cartItemElement)return;cartItemElement.classList.remove("loading")}this.lineItemStatusElement.setAttribute("aria-hidden","true")}}),customElements.get("free-shipping-progress")||customElements.define("free-shipping-progress",class extends HTMLElement{constructor(){super(),this.renderProgress()}get progressBar(){return this.querySelector(".free-shipping-progress")}get messageWrapper(){return this.querySelector(".free-shipping-message")}renderProgress(){const cartTotalAmount=this.dataset.totalAmount,freeThreshold=this.dataset.freeThreshold;if(!isNumeric(cartTotalAmount)||!isNumeric(freeThreshold))return;const freeThresholdLocal=Math.round(parseInt(freeThreshold)*(Shopify.currency.rate||1))*100;let progress;if(cartTotalAmount-freeThresholdLocal>=0)progress=100,this.messageWrapper.innerHTML=window.cartStrings.freeShippingUnlockedMessage,this.classList.add("free-has-unlocked");else{progress=cartTotalAmount*100/freeThresholdLocal;const amountToQualify=freeThresholdLocal-cartTotalAmount;this.messageWrapper.innerHTML=window.cartStrings.freeShippingLockedMessage.replace("[amount]",formatPriceAmount(amountToQualify,Shopify.currency.active))}this.progressBar&&this.progressBar.style.setProperty("--free-shipping-progress",`${progress}%`),this.hasAttribute("data-confetti")&&document.dispatchEvent(new CustomEvent("freeShippingUnlocked",{detail:{status:progress>=100}}))}}),customElements.get("cart-note-modal")||customElements.define("cart-note-modal",class extends ModalDialog{constructor(){super();const form=this.querySelector("form");form&&(this.submitButton=this.querySelector("button[type=submit]"),form.addEventListener("submit",this.formSubmit.bind(this)))}formSubmit(event){event.preventDefault(),this.startLoading();const formData=new FormData(event.target),formDataJson=Object.fromEntries(formData.entries()),body=JSON.stringify(formDataJson);fetch(window.routes.cart_update_url,{...fetchConfig(),body}).then(response=>response.json()).then(response=>{if(response.error)throw new Error("Cart update error");popToast(window.cartStrings.addToNoteSuccess,"success"),this.hide()}).catch(error=>{popToast(window.cartStrings.addToNoteError,"error")}).finally(()=>{this.endLoading()})}startLoading(){this.submitButton.classList.add("loading"),this.submitButton.setAttribute("disabled","disabled")}endLoading(){this.submitButton.classList.remove("loading"),this.submitButton.removeAttribute("disabled")}}),customElements.get("shipping-calculator-modal")||customElements.define("shipping-calculator-modal",class ShippingCalculatorModal extends ModalDialog{static MAX_ATTEMPTS=3;constructor(){super(),this.asyncAttemptCount=0;const form=this.querySelector("form");form&&(form.addEventListener("submit",this.prepareRate.bind(this)),this.submitButton=this.querySelector("button[type=submit]"),this.successMessageElement=this.querySelector(".alert-success"))}prepareRate(event){event.preventDefault(),this.hideResults(),this.startLoading();const formData=new FormData(event.target),shipping_address={country:formData.get("country"),province:formData.get("province"),zip:formData.get("zip")},body=JSON.stringify({shipping_address});fetch(`${window.routes.cart_url}/prepare_shipping_rates.json`,{...fetchConfig(),body}).then(response=>{if(!response.ok)throw new Error(`Network response was not ok: ${response.statusText}`);return response.json()}).then(response=>{if(response==null||response.ok)this.asyncRate({shipping_address});else throw new Error("Prepare shipping rates error")}).catch(error=>{this.showError()})}asyncRate(params){fetch(`${window.routes.cart_url}/async_shipping_rates.json?`+this.serialize(params),{...fetchConfig("json","GET")}).then(response=>response.json()).then(response=>{response!=null&&response.shipping_rates!=null&&response.shipping_rates.length>0?this.showResults(response):++this.asyncAttemptCount>=ShippingCalculatorModal.MAX_ATTEMPTS?this.showError():setTimeout(()=>this.asyncRate(params),3e3)}).catch(error=>{this.showError()})}startLoading(){this.submitButton.classList.add("loading"),this.submitButton.setAttribute("disabled","disabled")}endLoading(){this.submitButton.classList.remove("loading"),this.submitButton.removeAttribute("disabled")}showError(){this.endLoading(),popToast(window.cartStrings.estimateShippingError,"error")}showResults(result){this.endLoading();const rates=result.shipping_rates;if(!rates||rates.length<=0||!this.successMessageElement)return;const countElement=this.successMessageElement.querySelector(".result-count");countElement.innerText=rates.length;const template=this.successMessageElement.querySelector("template").content,fragment=document.createDocumentFragment();rates.forEach(rate=>{const clone=document.importNode(template,!0);clone.querySelector(".presentment-name").textContent=rate["presentment-name"]||rate.name,clone.querySelector(".delivery-price").textContent=rate.price+rate.currency;let deliveryDate=rate.delivery_date;rate.delivery_range&&Array.isArray(rate.delivery_range)&&(rate.delivery_range.length>1?deliveryDate=rate.delivery_range.join(" - "):deliveryDate=rate.delivery_range[0]),(deliveryDate==null||deliveryDate==="")&&(deliveryDate="unknown"),clone.querySelector(".delivery-date").textContent=deliveryDate,fragment.appendChild(clone)}),this.successMessageElement.querySelector(".message-list").appendChild(fragment),this.successMessageElement.removeAttribute("hidden"),this.endLoading()}hideResults(){this.successMessageElement&&(this.successMessageElement.querySelector(".message-list").innerHTML="",this.successMessageElement.setAttribute("hidden","true"))}serialize(obj,prefix){return Object.keys(obj).filter(key=>obj.hasOwnProperty(key)).map(key=>{const k=prefix?`${prefix}[${key}]`:key,v=obj[key];return v!==null&&typeof v=="object"?this.serialize(v,k):`${encodeURIComponent(k)}=${encodeURIComponent(v)}`}).join("&")}}),customElements.get("gift-wrapping")||customElements.define("gift-wrapping",class extends HTMLElement{constructor(){if(super(),this.giftWrapId=this.dataset.giftWrappingId,!this.giftWrapId)return;this.itemQuantity=Math.max(0,parseInt(this.dataset.itemQuantity)),this.cartItems=document.getElementById(`Cart-Items-Main-${this.dataset.section}`);const boundChange=debounce(this.onChange.bind(this),1e3);this.checkInput=this.querySelector('input[type="checkbox"]'),this.checkInput.addEventListener("change",boundChange)}onChange(event){event.target.checked?this.setWrapping():this.removeWrapping()}setWrapping(){const body=JSON.stringify({updates:{[this.giftWrapId]:this.itemQuantity},attributes:{"gift-wrap":"Yes"},sections:this.cartItems.getSectionsToRender().map(section=>section.section),sections_url:window.location.pathname});this.fetchData(body)}removeWrapping(){const body=JSON.stringify({updates:{[this.giftWrapId]:0},attributes:{"gift-wrap":""},sections:this.cartItems.getSectionsToRender().map(section=>section.section),sections_url:window.location.pathname});this.fetchData(body)}fetchData(body){this.enableLoading(),fetch(window.routes.cart_update_url,{...fetchConfig(),body}).then(response=>response.json()).then(responseJson=>{this.cartItems.handleCartUpdate(responseJson,this.giftWrapId,this.checkInput)}).catch(error=>{popToast(window.variantStrings.unknownError,"error")}).finally(()=>{this.disableLoading()})}enableLoading(){this.cartItems.enableLoading(),this.checkInput.setAttribute("disabled","true")}disableLoading(){this.cartItems.disableLoading(),this.checkInput.removeAttribute("disabled")}});
//# sourceMappingURL=/cdn/shop/t/2/assets/cart.js.map?v=36123060019040517951734427782
