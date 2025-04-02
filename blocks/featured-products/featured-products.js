import { getCookie } from '../../scripts/scripts.js';

export default async function decorate(block) {
  const picture = block.querySelector('picture');
  const path = window.location.pathname;
  
  try {
    let apiUrl;
    if (getCookie('cq-authoring-mode') === 'TOUCH') {
      const trimmedPath = path.replace(/\.html$/, '').trim(); // Ensure no trailing spaces
      console.log('Trimmed Path:', trimmedPath); // Debugging log
      apiUrl = `/bin/sciex/tags?pagePath=${encodeURIComponent(trimmedPath)}`;
    } else {
      apiUrl = `/bin/sciex/tags?pagePath=/content/sciex-eds${encodeURIComponent(path)}`;
    }
    
    console.log('Fetching URL:', apiUrl); // Debugging log
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    block.textContent = '';

    block.classList.add('featured-products');
    const dynamicElement = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = 'Featured Products';
    dynamicElement.appendChild(title);

    const listContainer = document.createElement('ul');

    Object.entries(data).forEach(([key, value]) => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');

      anchor.href = value && value.trim() !== '' ? value : '#';
      anchor.textContent = key;
      anchor.target = '_blank';

      listItem.appendChild(anchor);
      listContainer.appendChild(listItem);
    });

    dynamicElement.appendChild(listContainer);
    block.appendChild(dynamicElement);
    
    if (picture) {
      block.appendChild(picture);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
