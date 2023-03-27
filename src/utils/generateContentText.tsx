// This function is used to generate the text from sanity.io
// wysiwyg content object for the reading time calculation
export const generateContentText = (content: any[]) => {
  const text = content
    .map((block: any) => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map((child: any) => child.text).join('');
    })
    .join('\n\n');
  return text;
};
