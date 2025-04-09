export default async function decorate(block) {
  // Create main container div
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('resource');
  const heading = block.children[1]?.textContent?.trim() || 'Related Resources';
  const headingDiv = document.createElement('div');
  headingDiv.classList.add('heading');
  headingDiv.append(heading);
  blockDiv.append(headingDiv);

  block.textContent = '';
  block.append(blockDiv);
}
