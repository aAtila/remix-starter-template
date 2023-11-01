import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [
		{ title: '🔥' },
		{ name: 'description', content: 'Welcome to Remix!' },
	];
};

export default function Index() {
	return (
		<div>
			<h1>My next 🔥 project!</h1>
		</div>
	);
}
