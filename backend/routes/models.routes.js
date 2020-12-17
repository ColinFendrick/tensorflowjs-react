module.exports = app => {
	const controller = require('../controllers/models.controllers');
	const router = require('express').Router();

	router.get('/', controller.get);

	app.use('/models', router);
};
