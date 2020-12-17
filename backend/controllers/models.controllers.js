const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const abs = '.';
const rel = '..';
const path = '/ml-model/model.json';
const abspath = `${abs}${path}`;
const relpath = `${rel}${path}`;

exports.get = async (req, res) => {
	try {
		if (fs.existsSync(abspath)) {
			const model = require(relpath);
			res.status(200).send(model);
		} else {
			const { stdout, stderr } = await exec('node ml-model/main.js --epochs=0');

			if (stderr) console.log('stderr', stderr);
			if (stdout)
				fs.access(abspath, fs.F_OK, error => {
					console.log('Generating model...');
					if (error) res.status(400).send({ error });

					const model = require(relpath);
					res.status(200).send(model);
				});
		}
	} catch (error) {
		res.status(400).send({ error });
	}
};
