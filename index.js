'use strict';
const path = require('path');
const makeDir = require('make-dir');

module.exports = opts => {
	opts = Object.assign({
		cwd: process.cwd()
	}, opts);

	return function () {
		const args = [opts.cwd].concat([].slice.call(arguments));
		const pth = path.join.apply(null, args);

		makeDir.sync(path.dirname(pth));

		return path.resolve(pth);
	};
};
