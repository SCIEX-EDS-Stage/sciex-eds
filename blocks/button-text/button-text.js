import {} from '../../scripts/aem.js';

export default async function decorate(block) {
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('button-wrapper');

  const pList = block.querySelectorAll('div > div > p');
  const label = pList.length > 0 ? pList[0] : '';
  const buttonText = pList.length > 1 ? pList[1].textContent.trim() : 'Download PDF';

  const anchor = block.querySelector('.button-container a');
  block.textContent = '';

  if (anchor) {
    if (label) {
      label.classList.add('button-label');
      blockDiv.appendChild(label);
    }

    const button = document.createElement('button');
    button.innerHTML = `${buttonText} <span class="arrow">→</span>`;
    button.classList.add('custom-button');

    button.addEventListener('click', (event) => {
      event.preventDefault();
      window.open(anchor.href, '_blank');
    });

    const wrapperAnchor = document.createElement('a');
    wrapperAnchor.href = anchor.href;
    wrapperAnchor.title = anchor.title;
    wrapperAnchor.target = '_blank';
    wrapperAnchor.rel = 'noopener noreferrer';
    wrapperAnchor.classList.add('button-link');
    wrapperAnchor.appendChild(button);

    blockDiv.appendChild(wrapperAnchor);
  }

  block.append(blockDiv);
}
