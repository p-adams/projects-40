import Hapi from '@hapi/hapi';

async function run() {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost'
	});
	server.route([
		{
			method: 'GET',
			path: '/',
			handler: async (request, h) => {
				// send mock products to facilitate UI rendering
				const products = await (await import('.//mock_data/products.json')).default;
				return h.response(products);
			}
		},
		{
			method: 'GET',
			path: '/cart',
			handler: (request, h) => {
				return h.response({ test: 'meow' });
			}
		}
	]);
	await server.start();
	console.log(`Server running on ${server.info.host}`);
}

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

run();
