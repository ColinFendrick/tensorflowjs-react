module.exports = app => {
	const controller = require('../controllers/basic.controllers');
	const router = require('express').Router();

	router.get('/', controller.get);

	app.use('/', router);
};
