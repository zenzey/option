/**
 * Module dependencies.
 */
var type = require('type')
  , object = require('object');

/**
 * Export Option
 */
module.exports = Option;

/**
 * Option mixin
 */
function Option(obj, defaults) {
  if ('object' !== type(obj)) {
    throw new Error("Object expected.");
  };

  obj._defaults = defaults;

  return mixin(obj);
}


function mixin(obj) {
  for (var key in Option.prototype) {
    obj[key] = Option.prototype[key];
  }

  return obj;
}

/**
 * Sets the default values for the options. Expects an object.
 */
Option.prototype.defaults = function(defaults) {
  this._defaults = defaults || {};
  return this;
}

/**
 * Set options `setting` to `val` or get `prop` value.
 * Also accepts an object (`setting`: `val`)
 *
 * @param {String} setting
 * @param {Mixed} val
 * @return {Option}
 * @api public
 */
Option.prototype.option = function(setting, value) {
  if (2 == arguments.length) {
    var obj = {};
    obj[setting] = value;
    return this.setOption(obj);
  }

  if ('object' == type(setting)) {
    return this.setOption(setting);
  }

  return this.getOption(setting);
} 

/**
 * Set options `settings`.
 *
 * @param {Object} settings
 * @return {Option} self
 * @api private
 */

Option.prototype.setOption = function(settings) {
  this.opts = object.merge(this.opts || {}, settings);
  return this;
};

/**
 * Get options `setting` value.
 *
 * @param {String} prop
 * @return {String}
 * @api private
 */

Option.prototype.getOption = function(setting) {
  return this.opts[setting] != null ? this.opts[setting] : this._defaults[setting];
};

