const express = require('express');
const { sequelize } = require('./models/');
const { rootRouter } = require('./routers');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
const publicPathDirectory = path.join(__dirname, './public');
app.use('/public/', express.static(publicPathDirectory));

app.use('/api/v1/99999', rootRouter);

app.listen(port, async () => {
	console.log('App listening on http://localhost:3000');
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
});
