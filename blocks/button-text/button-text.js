import { span } from '../../scripts/dom-builder.js';
import { decorateIcons } from '../../scripts/aem.js';

export default async function decorate(block) {
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('button-wrapper');

  const pList = block.querySelectorAll('div > div > p');
  const label = pList.length > 0 ? pList[0] : '';
  const buttonText = pList.length > 1 ? pList[1].textContent.trim() : 'Download PDF';
  const targetValue = pList.length > 1 ? pList[3].textContent.trim() : '_blank';

  const anchor = block.querySelector('.button-container a');
  block.textContent = '';

  if (anchor) {
    if (label) {
      label.classList.add('button-label');
      blockDiv.appendChild(label);
    }

    const button = document.createElement('button');
    button.classList.add('custom-button');

    // Create arrow icon
    const arrowIcon = span({ class: 'icon icon-arrow' });

    // Append text and arrow to button
    button.appendChild(document.createTextNode(buttonText));
    button.appendChild(arrowIcon);

    button.addEventListener('click', (event) => {
      event.preventDefault();
      window.open(anchor.href, targetValue);
    });

    const wrapperAnchor = document.createElement('a');
    wrapperAnchor.href = anchor.href;
    wrapperAnchor.title = anchor.title;
    wrapperAnchor.target = targetValue;
    wrapperAnchor.rel = 'noopener noreferrer';
    wrapperAnchor.classList.add('button-link');
    wrapperAnchor.appendChild(button);
    decorateIcons(wrapperAnchor);
    blockDiv.appendChild(wrapperAnchor);
  }

  block.append(blockDiv);
}
