var Store = require('./store');
var assert = require('assert');

describe('Store', function() {
  describe('Initial state', function() {

    it('Takes initial state', function() {
      var initialState = {
        foo: 'bar'
      };
      var store = new Store(initialState);
      assert.deepEqual(store.getState(), {
        foo: 'bar'
      });
    });

    it('Creates an empty state', function() {
      var store = new Store();
      assert.deepEqual(store.getState(), {});
    });

  });

  describe('get()', function() {
    before(function() {
      this.store = new Store({
        foo: 'bar'
      });
    });

    it('Return attribute value', function() {
      assert.equal(this.store.get('foo'), 'bar');
    });

    it('Does not throw error on non-existent key', function() {
      assert.doesNotThrow(function() {
        this.store.get('xxx');
      }.bind(this));
    });

  });

});
