const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOptions = {
	origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/basic.routes')(app);
require('./routes/models.routes')(app);

app.get('/', (req, res) => {
	res.json({
		message: 'Healthcheck --- server running.'
	});
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
