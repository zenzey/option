/**
 * Module dependencies.
 */

var Option = require('option');

describe('Option(obj, defaults)', function() {
  var defaults = {
      one: 2,
      three: 'four',
      five: false
    }, Test = function Test() {}
    , obj;

  beforeEach(function() {
    Option(Test.prototype, defaults);
    obj = new Test();
  });

  describe('.defaults(obj)', function () {
    it('should override original defaults', function () {
      obj.defaults({by: 'one'});

      // new defaults.
      assert( 'one' === obj._defaults.by);

      // old defaults.
      assert( 2 !== obj._defaults.one);
      assert( 'four' !== obj._defaults.three);
      assert( false !== obj._defaults.five);
    });
  });

  describe('.option(setting)', function () {
    it('should get `setting` from object options', function () {
      assert( 2 === obj._defaults.one);
      assert( 'four' === obj._defaults.three);
      assert( false === obj._defaults.five);
    });
  });

  describe('.option(setting, value)', function() {
    it('should set `setting` as `value`', function() {
      obj.option('one', 'two');

      assert('two' === obj.option('one'));
    });
  });

  describe('.option(objSettings)', function () {
    it('should set multiple settings from `objSettings`', function() {
      var arr = [1,2,3];
      obj.option({one: 'two', six: arr});

      assert(obj.option('one'), 'two');
      assert(obj.option('six'), [1,2,3]);
    });
  });
});