import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Button } from '~/components/ui/button';

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
		<div className="grid grid-cols-1 gap-4 p-4">
			<h1 className="text-2xl font-bold">My next 🔥 project!</h1>
			<small>{message}</small>
			<Button className="max-w-max">Button</Button>
		</div>
	);
}
