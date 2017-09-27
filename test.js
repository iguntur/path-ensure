import os from 'os';
import fs from 'fs';
import path from 'path';
import test from 'ava';
import fn from './';

const pkg = require('./package.json');

test('ensure file exists - cwd', t => {
	const cwd = process.cwd();
	const paths = fn();

	t.true(typeof paths === 'function');
	t.is(paths('.tmp', 'foo', 'bar'), path.join(cwd, '.tmp/foo/bar'));
	t.is(paths('/.tmp', 'foo-bar', 'baz'), path.join(cwd, '.tmp/foo-bar/baz'));
	t.is(paths('/.tmp', '/a/b', '/c'), path.join(cwd, '.tmp/a/b/c'));
	t.true(paths('.tmp/x/y/z/1.txt').includes('1.txt'));
	t.true(paths('.tmp', 'a', 'b', 'baz.txt').endsWith('baz.txt'));

	const x = paths('.tmp', 'foo/bar-baz', 'a.txt');
	fs.writeFileSync(x, '🦄');
	t.true(fs.existsSync(path.join(cwd, '.tmp/foo/bar-baz/a.txt')));
	t.is(fs.readFileSync(path.join(cwd, '.tmp/foo/bar-baz/a.txt'), 'utf8'), '🦄');
});

test('ensure file exists - os.tmpdir', t => {
	const cwd = path.join(os.tmpdir(), pkg.name);
	const paths = fn({cwd});

	t.true(typeof paths === 'function');
	t.true(paths('a/b/c/d.txt').includes(pkg.name));
	t.is(paths('abc', 'def'), path.join(cwd, 'abc/def'));
	t.true(paths('abc', 'def') === path.join(cwd, 'abc/def'));
	t.is(paths('/x/y/z', 'foo.txt'), path.join(cwd, 'x/y/z/foo.txt'));

	const x = paths('foo/bar-baz.txt');
	fs.writeFileSync(x, '🦄');
	t.true(fs.existsSync(path.join(cwd, 'foo/bar-baz.txt')));
	t.is(fs.readFileSync(path.join(cwd, 'foo/bar-baz.txt'), 'utf8'), '🦄');
});
