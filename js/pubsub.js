let subscribers = {};
function subscribe(eventName, callback) {
  return (
    subscribers[eventName] === void 0 && (subscribers[eventName] = []),
    (subscribers[eventName] = [...subscribers[eventName], callback]),
    function () {
      subscribers[eventName] = subscribers[eventName].filter(
        (cb) => cb !== callback
      );
    }
  );
}
function publish(eventName, data) {
  subscribers[eventName] &&
    subscribers[eventName].forEach((callback) => {
      callback(data);
    });
}
//# sourceMappingURL=/cdn/shop/t/2/assets/pubsub.js.map?v=158357773527763999511730604923
