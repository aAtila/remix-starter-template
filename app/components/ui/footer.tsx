import { COMPANY_NAME, DOMAIN } from '~/config/constants';

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer>
			<div className="flex flex-col justify-center gap-5 p-2 text-xs md:flex-row">
				<div className="text-center">
					Copyright © {year} {COMPANY_NAME ?? DOMAIN} - All Rights Reserved
				</div>
			</div>
		</footer>
	);
}
