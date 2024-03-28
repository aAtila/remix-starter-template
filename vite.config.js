import { unstable_vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { remixDevTools } from 'remix-development-tools/vite';

export default defineConfig({
	server: {
		port: 3333,
	},
	plugins: [
		tsconfigPaths(),
		remixDevTools(),
		remix({
			ignoredRouteFiles: ['**/.*'],
			serverModuleFormat: 'esm',
		}),
	],
});
