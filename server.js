import { createRequestHandler } from '@remix-run/express';
import { installGlobals } from '@remix-run/node';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import sourceMapSupport from 'source-map-support';

sourceMapSupport.install();
installGlobals();

const viteDevServer =
	process.env.NODE_ENV === 'production'
		? undefined
		: await import('vite').then((vite) =>
				vite.createServer({
					server: { middlewareMode: true },
				}),
			);

const app = express();

app.use(compression());

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable('x-powered-by');

// handle asset requests
if (viteDevServer) {
	app.use(viteDevServer.middlewares);
} else {
	// Remix fingerprints its assets so we can cache forever.
	app.use(
		'/assets',
		express.static('build/client/assets', { immutable: true, maxAge: '1y' }),
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
		build: viteDevServer
			? () => viteDevServer.ssrLoadModule('virtual:remix/server-build')
			: await import('./build/server/index.js'),
	}),
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('http://localhost:' + port));
