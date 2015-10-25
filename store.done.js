var fs = require('fs');

function Store(initialState) {
  this.state = initialState || {};
}

Store.prototype.getState = function() {
  return this.state;
};

Store.prototype.get = function(property) {
  return this.state[property];
}

Store.prototype.save = function(callback) {
  var content = JSON.stringify(this.getState());
  fs.writeFile('./store.json', content, callback);
};

module.exports = Store;
