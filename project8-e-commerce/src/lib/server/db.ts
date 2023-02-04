import { Database } from 'sqlite3';

const db = new Database(':memory:', async (err) => {
	if (err) {
		return console.error(err.message);
	}

	console.log('Connected to DB');
});

db.serialize(async () => {
	const products = await (await import('./mock_data/products.json')).default;
});
