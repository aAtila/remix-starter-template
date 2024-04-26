import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
// Just import the CSS as a side effect
import './tailwind.css';

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="min-h-svh bg-gray-200">
				<Outlet />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}
