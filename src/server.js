const knex = require('knex');
const app = require('./app');
const { PORT, NODE_ENV, DB_URL } = require('./config');

//DB connection
const db = knex({
	client: 'pg',
	connection: DB_URL,
});

app.set('db', db);

app.listen(PORT, () => {
	console.log(`Server in ${NODE_ENV} listening at ${PORT}`);
});
