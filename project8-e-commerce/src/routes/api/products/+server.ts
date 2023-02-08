import { json } from '@sveltejs/kit';
// TODO refactor away hapi API server
export function GET() {
	return json({ test: 'meow' });
}
