var Store = require('./store.done');
var assert = require('assert');
var fs = require('fs');

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

  describe.skip('getState()', function() {
    it('Returns a copy of the state', function() {
      var store = new Store();
      var state = store.getState();
      state.foo = 'bar';
      assert.notEqual(store.getState().foo, 'bar');
    });
  });

  describe('save()', function() {
    before(function(done) {
      var store = new Store({
        foo: 'bar'
      });
      store.save(done);
    })

    after(function(done) {
      fs.unlink('./store.json', function(err) {
        done();
      });
    });

    it('Creates state.json', function(done) {
      fs.stat('./store.json', function(err, stats) {
        assert.ok(stats);
        done();
      });
    });

    it('Saves actual state', function(done) {
      fs.readFile('./store.json', function(err, data) {
        var state = JSON.parse(data.toString());
        assert.equal(state.foo, 'bar');
        done();
      });
    });
  });
});
