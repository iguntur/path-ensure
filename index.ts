import path from 'path';
import makeDir from 'make-dir';

async function main(...paths: string[]) {
	const pth = path.resolve(process.cwd(), ...paths);
	await makeDir(path.dirname(pth));
	return path.resolve(pth);
}

main.sync = function (...paths: string[]) {
	const pth = path.resolve(process.cwd(), ...paths);
	makeDir.sync(path.dirname(pth));
	return path.resolve(pth);
};

export default main;

module.exports = main;
module.exports.default = main;
