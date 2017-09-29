# path-ensure [![Build Status](https://travis-ci.org/iguntur/path-ensure.svg?branch=master)](https://travis-ci.org/iguntur/path-ensure)

> Ensure path exists

This just a simple module for ensure generate directory before writing the files. If you need more `API`, maybe you should use the [`fs-extra`](#https://github.com/jprichardson/node-fs-extra) module.

## Install

```
$ npm install path-ensure
```


## Usage

```js
const pathEnsure = require('path-ensure');

const pEnsure = pathEnsure({cwd: __dirname});

pEnsure('awesome', 'unicorn.txt').then(filepath => {
    console.log(filepath);
    //=> /some/path/examples/awesome/unicorn.txt
});
```


## API

### `pathEnsure([options])`

Returns a `Promise` for a string input `paths`.

Example

```js
const fs = require('fs');
const pathEnsure = require('path-ensure');

const pEnsure = pathEnsure();

pEnsure('awesome', 'unicorn.txt').then(filepath => {
    const writeStream = fs.createWriteStream(filepath);

    writeStream.write('🦄');
});
```

### `.sync([...paths])`

Example

```js
const fs = require('fs');
const pathEnsure = require('path-ensure');

const pEnsure = pathEnsure();

const writeStream = fs.createWriteStream(
    pEnsure.sync('awesome', 'unicorn.txt')
);

writeStream.write('🦄');
```

#### paths

The input `arguments` can be add in multiple times, think like `path.join('foo', 'bar')`.

Type: `string`<br>

#### options

Type: `object`

##### cwd

Type: `string`<br>
Default: `process.cwd()`


## Related

- [make-dir](https://github.com/sindresorhus/make-dir) - Make a directory and its parents if needed - Think `mkdir -p`
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - Contains methods that aren't included in the vanilla Node.js fs package.


## License

MIT © [Guntur Poetra](http://github.com/iguntur)
