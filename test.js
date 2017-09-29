import fs from 'fs';
import path from 'path';
import test from 'ava';
import pify from 'pify';
import fn from './';

const fsP = pify(fs);

test('async', async t => {
	const cwd = process.cwd();
	const p = fn({cwd});

	t.true(typeof p === 'function');
	t.true(p() instanceof Promise);
	t.is(await p(), cwd);
	t.is(await p('.tmp', 'foo', 'bar'), path.join(cwd, '.tmp/foo/bar'));
	t.is(await p('.tmp', 'foo', '/baz.txt'), path.join(cwd, '.tmp/foo/baz.txt'));

	const x = await p('.tmp', 'x/y/z', 'foo.txt');
	await fsP.writeFile(x, '🍵');
	t.is(await fsP.readFile(path.join(cwd, '.tmp/x/y/z/foo.txt'), 'utf8'), '🍵');
});

test('sync', t => {
	const cwd = process.cwd();
	const p = fn({cwd});

	t.true(typeof p.sync === 'function');
	t.is(p.sync(), cwd);
	t.is(p.sync('.tmp', 'foo', 'bar'), path.join(cwd, '.tmp/foo/bar'));
	t.is(p.sync('/.tmp', 'foo', 'baz.txt'), path.join(cwd, '.tmp/foo/baz.txt'));

	const x = p.sync('.tmp', 'x/y/z', 'foo.txt');
	fs.writeFileSync(x, '🦄');
	t.is(fs.readFileSync(path.join(cwd, '.tmp/x/y/z/foo.txt'), 'utf8'), '🦄');
});
