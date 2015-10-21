function Store(initialState) {
  this.state = initialState || {};
}

Store.prototype.getState = function() {
  return this.state;
};

Store.prototype.get = function(property) {
  return this.state[property];
}

module.exports = Store;
