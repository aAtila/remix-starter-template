import { CMS_DATA_MODEL, CMS_URL } from '~/config/constants';

const Status = {
	Published: 'published',
	Draft: 'draft',
	Archived: 'archived',
} as const;
type Status = (typeof Status)[keyof typeof Status];

type Content = {
	id: number;
	status: Status;
	date_created: string;
	date_updated: string;
	title: string;
	slug: string;
	content: string;
	category: number;
	description: string;
	noindex: boolean;
	category_in_url: boolean;
};

export const getContentBySlug = async (
	slug: string,
): Promise<Content | undefined> => {
	const url = `${CMS_URL}/items/${CMS_DATA_MODEL}?filter[slug][_eq]=${encodeURIComponent(slug)}&filter[status][_eq]=${Status.Published}`;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			console.error('Failed to fetch content:', response.statusText);
			return undefined;
		}

		const data = await response.json();

		if (data && data.data && Array.isArray(data.data) && data.data.length > 0) {
			return data.data[0];
		} else {
			console.error('Content not found or unexpected data structure:', data);
			return undefined;
		}
	} catch (error) {
		console.error('Error fetching content by slug:', error);
		return undefined;
	}
};
