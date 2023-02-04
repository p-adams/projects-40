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
			handler: (request, h) => {
				return 'Hello World!';
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
