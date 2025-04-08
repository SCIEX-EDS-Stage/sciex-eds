import {} from '../../scripts/aem.js';

export default async function decorate(block) {
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('tabs-nav', 'tab-buttons');
  const tabData = document.createElement('div');
  tabData.classList.add('tab-data');
  [...block.children].forEach((row) => {
    const tabDIv = document.createElement('div');
    tabDIv.id = row.children[1].textContent;
    tabDIv.classList.add('tab-section');
    tabDIv.textContent = row.children[0].textContent;
    blockDiv.append(tabDIv);
  });
  block.textContent = '';
  block.append(blockDiv);
  block.append(tabData);
}
