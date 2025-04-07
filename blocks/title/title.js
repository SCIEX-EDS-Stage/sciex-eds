import { getMetadata } from '../../scripts/aem.js';

export default async function decorate(block) {
  // Create main container div
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('hero-title');
  const heading = block.children[0].textContent;
  const headingDiv = document.createElement('div');
  headingDiv.classList.add('hero-heading');
  const pageTitle = getMetadata('og:title');
  if (heading && heading.trim() !== '') {
    headingDiv.append(heading);
  } else {
    headingDiv.append(pageTitle);
  }
  blockDiv.append(headingDiv);

  block.textContent = '';
  block.append(blockDiv);
}
