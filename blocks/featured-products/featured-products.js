export default async function decorate(block) {
  const currentUrl = window.location.href;
  const relativePath = currentUrl.split('/').slice(3).join('/');
  try {
    const response = await fetch(`/bin/sciex/tags?pagePath=/content/sciex-eds/${relativePath}`);
    const data = await response.json();

    block.classList.add('featured-products');

    const title = document.createElement('h2');
    title.textContent = 'Featured Products';
    block.appendChild(title);

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

    block.appendChild(listContainer);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
