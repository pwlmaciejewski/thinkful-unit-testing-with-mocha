function Store(initialState) {
  this.state = initialState || {};
}

Store.prototype.getState = function() {
  return this.state;
}

Store.prototype.get = function(key) {
  return this.state[key];
}

module.exports = Store;
