export default async function decorate(block) {
  // Create main container div
  const blockDiv = document.createElement('div');
 

  block.textContent = '';
  block.append(blockDiv);
}
