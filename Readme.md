
# option

  A simple Options mixin component.

## Installation

    $ component install zenzey/option

## API

Make something configurable with defaults:

```js
var Option = require('option');

// From a plain object
var obj = {};
Option(obj, defaults);

// returns the obj itself
// mixed with `Option`
var obj = Option({});

// embed a prototype with `Option` methods
Option(MyThing.prototype, defaults);
```

The resulting objects will then have the following methods:

```js
.defaults(obj)      // override 'defaults' with obj
.option(name)       // retrieve value of 'name'
.option(name, val)  // set value to 'name'
.option(obj)        // set multiple values to settings
```

## License

  MIT
