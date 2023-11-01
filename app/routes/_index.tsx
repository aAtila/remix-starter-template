import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
	];
};

export default function Index() {
	return (
		<div>
			<h1 className="text-2xl text-sky-500">My next 🔥 project!</h1>
		</div>
	);
}
