var Store = require('./store.done');
var assert = require('assert');

describe('Store', function() {
  describe('Initial state', function() {
    it('Supports initial state object', function() {
      var initialState = {
        foo: 'bar'
      };
      var store = new Store(initialState);
      assert.deepEqual(store.getState(), initialState);
    });

    it('Creates empty state by default', function() {
      var store = new Store();
      assert.deepEqual(store.getState(), {});
    });
  });


  describe('get()', function() {
    beforeEach(function() {
      this.store = new Store({
        foo: 'bar'
      });
    });

    it('Returns value for specified property', function() {
      assert.equal(this.store.get('foo'), 'bar');
    });

    it('Does not throw an error when property does not exist', function() {
      assert.doesNotThrow(function() {
        this.store.get('xxx');
      }.bind(this));
    });
  });

  describe('getState()', function() {
    it.skip('Returns a copy of the state', function() {
      assert.ok(false);
    });
  });
});
