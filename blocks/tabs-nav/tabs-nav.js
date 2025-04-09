import {} from '../../scripts/aem.js';

export default async function decorate(block) {
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('tabs-nav', 'tab-buttons');
  block.textContent = '';
  block.append(blockDiv);
}
