# path-ensure [![Build Status](https://travis-ci.org/iguntur/path-ensure.svg?branch=master)](https://travis-ci.org/iguntur/path-ensure)

> Ensure path exists

This just a simple module for ensure generate directory before writing the files. If you need more `API`, maybe you should use the [`fs-extra`](#https://github.com/jprichardson/node-fs-extra) module.

## Table Of Content

- [Install](#install)
- [Usage](#usage)
- [API](#api)
	- [`pathEnsure`](#pathensureoptionspaths)
	- [`pathEnsure.sync`](#syncpaths)

---


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

### pathEnsure([options])([...paths])

- [options](#options): `<object>`
- paths: `<string>`<br>
	A sequence of path segments. Think like `path.join('foo', 'bar')`.
- Return: `<Promise>`

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

### .sync([...paths])

- [options](#options): `<object>`
- paths: `<string>`<br>
	A sequence of path segments. Think like `path.join('foo', 'bar')`.
- Return: `<string>`

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


#### options

##### cwd

- Type: `string`
- Default: `process.cwd()`


## Related

- [make-dir](https://github.com/sindresorhus/make-dir) - Make a directory and its parents if needed - Think `mkdir -p`
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - Contains methods that aren't included in the vanilla Node.js fs package.


## License

MIT © [Guntur Poetra](http://github.com/iguntur)
