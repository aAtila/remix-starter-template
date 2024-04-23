import { SITE_URL } from '~/config/constants';

export const loader = () => {
	const robotText = `
    User-agent: *
    Allow: /

    Sitemap: ${SITE_URL}/sitemap.xml
    `;
	return new Response(robotText, {
		status: 200,
		headers: {
			'Content-Type': 'text/plain',
		},
	});
};
