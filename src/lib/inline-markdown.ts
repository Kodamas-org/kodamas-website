// Turns a short frontmatter string into safe inline HTML: the text is
// escaped, then **bold** becomes <strong>. Used for call-to-action copy.
export function inlineMarkdown(text: string): string {
	const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	return escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}
