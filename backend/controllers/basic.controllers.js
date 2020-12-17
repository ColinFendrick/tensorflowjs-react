exports.get = async (req, res) => {
	console.log('Healthcheck initiated');
	res.status(200).send({
		messsage: 'Welcome'
	});
};
