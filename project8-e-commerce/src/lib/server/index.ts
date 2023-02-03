import Hapi from '@hapi/hapi';

async function run() {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost'
	});
	await server.start();
	console.log(`Server running on ${server.info.host}`);
}

export default run();
