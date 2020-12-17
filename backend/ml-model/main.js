require('@tensorflow/tfjs-node');
const argparse = require('argparse');

const data = require('./data');
const model = require('./model');

async function run(epochs, batchSize) {
	await data.loadData();

	const { images: trainImages, labels: trainLabels } = data.getTrainData();
	model.summary();

	const validationSplit = 0.15;
	await model.fit(trainImages, trainLabels, {
		epochs,
		batchSize,
		validationSplit
	});

	const { images: testImages, labels: testLabels } = data.getTestData();
	const evalOutput = model.evaluate(testImages, testLabels);

	console.log(
		'\nEvaluation result:\n' +
      `  Loss = ${evalOutput[0].dataSync()[0].toFixed(3)}; ` +
      `Accuracy = ${evalOutput[1].dataSync()[0].toFixed(3)}`);

	await model.save('file://./ml-model');
	console.log('Saved model to path: ./ml-model/model.json');
}

const parser = new argparse.ArgumentParser({
	description: 'TensorFlow.js-Node MNIST Example.',
	addHelp: true
});
parser.addArgument('--epochs', {
	type: 'int',
	defaultValue: 20,
	help: 'Number of epochs to train the model for.'
});
parser.addArgument('--batch_size', {
	type: 'int',
	defaultValue: 128,
	help: 'Batch size to be used during model training.'
});
const args = parser.parseArgs();

run(args.epochs, args.batch_size);
