# path-ensure [![Build Status](https://travis-ci.org/iguntur/path-ensure.svg?branch=master)](https://travis-ci.org/iguntur/path-ensure)

> Ensure path exists


## Install

```
$ npm install path-ensure
```


## Usage

```js
const fs = require('fs');
const path = require('path');
const pathEnsure = require('path-ensure');

const pEnsure = pathEnsure({cwd: process.cwd()});

fs.writeFileSync(pEnsure('awesome', 'awesome', 'unicorn.txt'), '🦄');

const unicorn = fs.readFileSync(
    path.join(process.cwd(), 'awesome/awesome/unicorn.txt'),
    'utf8'
);

console.log(unicorn);
//=> 🦄
```


## API

### `pathEnsure(`*[`options`](#options)*`)`

Returns a function an apply with `path.join` API.

#### options

Type: `object`

##### cwd

Type: `string`<br>
Default: `process.cwd()`


## Related

- [make-dir](https://github.com/sindresorhus/make-dir) - Make a directory and its parents if needed - Think `mkdir -p`


## License

MIT © [Guntur Poetra](http://github.com/iguntur)
