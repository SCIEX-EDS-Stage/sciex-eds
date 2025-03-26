export default async function decorate(block) {
  const currentUrl = window.location.href;
  const relativePath = currentUrl.split('/').slice(3).join('/');
  try {
    const response = await fetch(`/bin/sciex/tags?pagePath=${relativePath}`);

    const data = await response.json();
    block.textContent = '';
    const path = window.location.pathname;
    const resp = await fetch(`${path}.plain.html`);
    let picture = null;
    if (resp.ok) {
      const html = await resp.text();
      const imageDiv = document.createElement('imageDiv');
      imageDiv.innerHTML = html;
      picture = imageDiv.querySelector('picture');
    }

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
