import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
	return [
		{ title: '🔥' },
		{ name: 'description', content: 'Welcome to Remix!' },
	];
};

export const loader = () => {
	return { message: 'Hello from the server! We ❤️ vite!' };
};

export default function Index() {
	const { message } = useLoaderData<typeof loader>();
	return (
		<div>
			<h1 className="text-2xl font-bold">My next 🔥 project!</h1>
			<small>{message}</small>
		</div>
	);
}
