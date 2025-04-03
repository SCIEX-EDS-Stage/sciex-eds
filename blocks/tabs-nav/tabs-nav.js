import {} from '../../scripts/aem.js';

function showTabContent(tabId) {
  const section = document.getElementById(`${tabId}-content`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
export default async function decorate(block) {
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('tw', 'tabs-nav', 'tab-buttons', 'tw-bg-white');
  const tabData = document.createElement('div');
  tabData.classList.add('tab-data');
  [...block.children].forEach((row) => {
    const tabDIv = document.createElement('div');
    tabDIv.id = row.children[1].textContent;
    tabDIv.classList.add('tab-section');
    tabDIv.textContent = row.children[0].textContent;
    blockDiv.append(tabDIv);
    tabDIv.addEventListener('click', function () {
      showTabContent(this.id);
    });
  });
  block.textContent = '';
  block.append(blockDiv);
  block.append(tabData);
}
