import { parse, transform, type RenderableTreeNodes } from '@markdoc/markdoc';

/**
 * @see https://sergiodxa.com/tutorials/parse-markdown-with-markdoc-in-remix for more information
 */
export const markdown = (markdown: string): RenderableTreeNodes =>
	transform(parse(markdown));
