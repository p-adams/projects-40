import { sveltekit } from '@sveltejs/kit/vite';
const config = {
    plugins: [sveltekit()],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
};
export default config;
//# sourceMappingURL=vite.config.js.map