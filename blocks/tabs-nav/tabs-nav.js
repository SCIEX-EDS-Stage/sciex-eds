import {} from '../../scripts/aem.js';

export default async function decorate(block) {
  // Create main container div
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('tw', 'tabs-nav', 'tab-buttons', 'tw-bg-white');
  const tabData = document.createElement('div');
  tabData.classList.add('tab-data');
  [...block.children].forEach((row) => {
    const tabDIv = document.createElement('div');
    tabDIv.id = row.children[0].textContent;
    tabDIv.textContent = row.children[0].textContent;
    blockDiv.append(tabDIv);
  });
  block.textContent = '';
  block.append(blockDiv);
}
