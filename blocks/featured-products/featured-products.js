import { getCookie } from '../../scripts/scripts.js';

export default async function decorate(block) {
  const picture = block.querySelector('picture');
  let path = window.location.pathname.replace(/\.html$/, ''); // Remove .html if present
  const origin = window.location.origin; // Includes protocol + hostname

  let response;
  try {
    let requestPath = `${origin}/bin/sciex/tags?pagePath=${encodeURIComponent(path)}`;

    if (getCookie('cq-authoring-mode') !== 'TOUCH') {
      requestPath = `${origin}/bin/sciex/tags?pagePath=${encodeURIComponent(path.replace('/content/sciex-eds', ''))}`;
    }

    console.log('Fetching:', requestPath); // Debugging line

    response = await fetch(requestPath);

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
