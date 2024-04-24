import Markdoc, { type RenderableTreeNodes } from '@markdoc/markdoc';
import * as React from 'react';

type MarkdownProps = { content: RenderableTreeNodes };

export function Markdown({ content }: MarkdownProps) {
	return <>{Markdoc.renderers.react(content, React)}</>;
}
