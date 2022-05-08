global.express = require('express');
const http = require('http');
const cors = require('cors');
require('dotenv').config();

const myRouter = require('./router');

const app = express();

const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);
global.util = require('./app/utils/function');
const db = require('./app/models');
db.sequelize.sync();

myRouter(app);

const server = http.Server(app);

server.listen(PORT, () => {
	console.log(`Start server on http://localhost/:${PORT}`);
});
