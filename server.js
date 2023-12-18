import * as fs from 'node:fs';
import * as path from 'node:path';
import * as url from 'node:url';

import { createRequestHandler } from '@remix-run/express';
import { broadcastDevReady, installGlobals } from '@remix-run/node';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import sourceMapSupport from 'source-map-support';
import { unstable_viteServerBuildModuleId } from '@remix-run/dev';

sourceMapSupport.install();
installGlobals();

const vite =
	process.env.NODE_ENV === 'production'
		? undefined
		: await import('vite').then(({ createServer }) =>
				createServer({
					server: {
						middlewareMode: true,
					},
				}),
			);

const app = express();

app.use(compression());

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable('x-powered-by');

// handle asset requests
if (vite) {
	app.use(vite.middlewares);
} else {
	// Remix fingerprints its assets so we can cache forever.
	app.use(
		'/build',
		express.static('public/build', { immutable: true, maxAge: '1y' }),
	);
}

// Everything else (like favicon.ico) is cached for an hour. You may want to be
// more aggressive with this caching.
app.use(express.static('public', { maxAge: '1h' }));

app.use(morgan('tiny'));

// handle SSR requests
app.all(
	'*',
	createRequestHandler({
		build: vite
			? () => vite.ssrLoadModule(unstable_viteServerBuildModuleId)
			: await import('./build/index.js'),
	}),
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('http://localhost:' + port));
