function createElement(tag, options = {}) {
  const el = document.createElement(tag);
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'classList') el.classList.add(...value);
    else if (key === 'text') el.textContent = value;
    else if (key === 'html') el.innerHTML = value;
    else if (key === 'append') el.append(...value);
    else if (key === 'addEventListener') el.addEventListener(...value);
    else el.setAttribute(key, value);
  });
  return el;
}

export default async function decorate(block) {
  const customerDocumentDiv = createElement('div', { classList: ['tw', 'customerdocument-search', 'tw-bg-white'] });
  block.append(customerDocumentDiv);
}
