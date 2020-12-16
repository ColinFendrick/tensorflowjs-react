const express = require('express');

const app = express();

require('./routes/basic.routes')(app);

app.get('/', (req, res) => {
	res.json({
		message: 'Healthcheck --- server running.'
	});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
