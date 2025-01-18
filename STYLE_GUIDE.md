# Vortex Code Style Guide

## HTML

### Structure
- Use semantic HTML5 elements (`nav`, `main`, `section`, etc.)
- Include descriptive `aria-` attributes for accessibility
- Keep nesting levels minimal for better readability
- Use meaningful class names that describe purpose

Example:
```html
<!-- Good -->
<nav class="main-navigation" aria-label="Main menu">
  <ul class="nav-list">
    <li class="nav-item">
      <a href="/products" class="nav-link">Products</a>
    </li>
  </ul>
</nav>

<!-- Avoid -->
<div class="nav">
  <div class="list">
    <div class="item">
      <a href="/products">Products</a>
    </div>
  </div>
</div>
```

## JavaScript

### File Organization
- One class/component per file
- Use clear, descriptive variable and function names
- Add JSDoc comments for functions and classes
- Use modern ES6+ features appropriately
- Handle errors gracefully

Example:
```javascript
/**
 * Manages product display and interaction
 */
class ProductManager {
  /**
   * Initialize product manager
   * @param {string} productId - Unique product identifier
   */
  constructor(productId) {
    this.productId = productId;
  }

  /**
   * Updates product quantity
   * @param {number} newQuantity - New quantity value
   * @returns {Promise<boolean>} Success status
   */
  async updateQuantity(newQuantity) {
    try {
      // Implementation
    } catch (error) {
      console.error('Failed to update quantity:', error);
      return false;
    }
  }
}
```

## CSS

### Organization
- Use BEM naming convention
- Group related properties
- Use CSS custom properties for themes
- Keep specificity low
- Comment complex selectors

Example:
```css
/* Component: Product Card */
.product-card {
  /* Layout */
  display: grid;
  grid-template-rows: auto 1fr auto;
  
  /* Spacing */
  padding: var(--spacing-medium);
  gap: var(--spacing-small);
  
  /* Visual */
  background: var(--color-background);
  border-radius: var(--border-radius);
}

.product-card__image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}
```

## General Practices

1. **Code Comments**
   - Add comments for complex logic
   - Explain "why" not "what"
   - Keep comments up to date

2. **File Structure**
   - Organize files by feature/component
   - Use consistent naming conventions
   - Keep files focused and single-purpose

3. **Version Control**
   - Write clear commit messages
   - Make small, focused commits
   - Use feature branches

4. **Performance**
   - Optimize images
   - Minimize DOM operations
   - Use efficient selectors
   - Implement lazy loading

5. **Accessibility**
   - Include ARIA labels
   - Ensure keyboard navigation
   - Maintain color contrast
   - Test with screen readers
