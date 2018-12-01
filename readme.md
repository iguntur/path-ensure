# path-ensure

[![Build Status](https://img.shields.io/travis/iguntur/path-ensure.svg?style=flat-square)](https://travis-ci.org/iguntur/path-ensure)
[![node](https://img.shields.io/node/v/path-ensure.svg?style=flat-square)](#)
[![npm](https://img.shields.io/npm/v/path-ensure.svg?style=flat-square)](https://www.npmjs.org/package/path-ensure)

> Ensure path exists

---

A simple module to generate the directory before writing the files. See [`fs-extra`](https://github.com/jprichardson/node-fs-extra) for advance.


## Install

```
$ npm install path-ensure
```

## API

### pathEnsure([...paths])

- Params:
    - paths: `<string[]>` - A sequence of path segments.
- Return: `<Promise<string>>`
- Example:
    ```js
    const fs = require('fs');
    const pathEnsure = require('path-ensure');
    const fs = require('fs');
    const pathEnsure = require('path-ensure');

    (async () => {
        const filepath = await pathEnsure(__dirname, 'some/path/to/create', 'unicorn.txt');
        console.log(filepath);
        const writeStream = fs.createWriteStream(filepath);
        writeStream.write('🦄');
    })();
    ```

#### .sync([...paths])

- Params:
    - paths: `<string[]>` - A sequence of path segments.
- Return: `<string>`
- Example:
    ```js
    const fs = require('fs');
    const pathEnsure = require('path-ensure');
    const writeStream = fs.createWriteStream(
        pathEnsure.sync('some/path/to/create', 'unicorn.txt')
    );
    writeStream.write('🦄');
    ```


## Related

- [make-dir](https://github.com/sindresorhus/make-dir) - Make a directory and its parents if needed - Think `mkdir -p`
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - Contains methods that aren't included in the vanilla Node.js fs package.


## License

MIT © [Guntur Poetra](http://github.com/iguntur)
