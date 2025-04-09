export default async function decorate(block) {
  // Create main container div
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('resource');
  const heading = block.children[1]?.textContent?.trim() || 'Related Resources';
  const headingDiv = document.createElement('div');
  headingDiv.classList.add('heading');
  headingDiv.append(heading);
  blockDiv.append(headingDiv);

  function createResourceDiv(title, linkText, linkUrl) {
    const container = document.createElement('div');
    container.className = 'links-container';

    const titleElement = document.createElement('strong');
    titleElement.className = 'title-Element';
    titleElement.textContent = title;

    const linkElement = document.createElement('a');
    linkElement.className = 'link-Element';
    linkElement.href = linkUrl;
    linkElement.textContent = linkText;

    container.appendChild(titleElement);
    container.appendChild(linkElement);

    return container;
  }

  const rows = [...block.children].slice(2, 6);

  rows.forEach((row) => {
    const columns = [...row.children];

    if (columns.length >= 3) {
      const title = columns[0]?.textContent?.trim();
      const linkText = columns[1]?.textContent?.trim();
      const linkUrl = columns[2]?.querySelector('a')?.href;

      if (title && linkText && linkUrl) {
        const resourceDiv = createResourceDiv(title, linkText, linkUrl);
        blockDiv.appendChild(resourceDiv);
      }
    }
  });

  block.textContent = '';
  block.append(blockDiv);
}
