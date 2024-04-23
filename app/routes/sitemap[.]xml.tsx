import { SITE_URL } from '~/config/constants';

export const loader = () => {
	const content = `
    <?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    	<url>
    		<loc>${SITE_URL}</loc>
    		<lastmod>2024-04-11</lastmod>
    		<priority>1.0</priority>
    	</url>
    </urlset>
    `;
	// Return the response with the content, a status 200 message, and the appropriate headers for an XML page
	return new Response(content, {
		status: 200,
		headers: {
			'Content-Type': 'application/xml',
			'xml-version': '1.0',
			encoding: 'UTF-8',
		},
	});
};
