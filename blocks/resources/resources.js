export default async function decorate(block) {
  // Create main container div
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('resource');

  block.textContent = '';
  block.append(blockDiv);
}
