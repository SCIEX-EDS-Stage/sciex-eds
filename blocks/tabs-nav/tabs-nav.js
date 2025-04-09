import {} from '../../scripts/aem.js';

export default async function decorate(block) {
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('tabs-nav', 'tab-buttons');
  const tabData = document.createElement('div');
  tabData.classList.add('tab-data');
  [...block.children].forEach((row) => {
    console.log('row>'+row.textContent);
  });
  block.textContent = '';
  block.append(blockDiv);
  block.append(tabData);
}
