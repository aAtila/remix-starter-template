import type { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import Footer from '~/components/ui/footer';
import Header from '~/components/ui/header';

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
		},
		// {
		// 	rel: 'preload',
		// 	href: '/images/banner.jpg',
		// 	as: 'image',
		// },
	];
};

export default function BaseLayout() {
	return (
		<div className="flex min-h-svh flex-col">
			<Header />
			<div className="flex-grow">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
