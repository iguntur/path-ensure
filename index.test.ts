import fs from 'fs';
import path from 'path';
import test from 'ava';
import pify from 'pify';
import tempy from 'tempy';
import main from '.';

const fsP = pify(fs);
const fixture = '🍵';
const cwd = process.cwd();

test('async', async t => {
	const tempdir = tempy.directory();
	t.is(await main(), cwd);
	t.is(await main(tempdir, 'foo', 'bar'), path.join(tempdir, 'foo/bar'));

	const x = await main(tempdir, 'x/y/z/foo.txt');
	await fsP.writeFile(x, fixture);
	t.is(await fsP.readFile(path.join(tempdir, 'x/y/z/foo.txt'), 'utf8'), fixture);
});

test('sync', t => {
	const tempdir = tempy.directory();
	t.is(main.sync(), cwd);
	t.is(main.sync(tempdir, 'foo', 'bar'), path.join(tempdir, 'foo/bar'));

	const x = main.sync(tempdir, 'x/y/z/foo.txt');
	fs.writeFileSync(x, fixture);
	t.is(fs.readFileSync(path.join(tempdir, 'x/y/z/foo.txt'), 'utf8'), fixture);
});
