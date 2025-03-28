import {} from '../../scripts/aem.js';

export default async function decorate(block) {
  // Create main container div
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('tw', 'tabs-nav', 'tw-bg-white');
  [...block.children].forEach((row) => {
    console.log(`tabs Nav>>>>>>${row.firstElementChild}`);
  });
  block.textContent = '';
  block.append(blockDiv);
}
