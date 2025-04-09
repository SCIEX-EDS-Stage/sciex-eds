export default function decorate(block) { 

    const blockDiv = document.createElement('div');
    blockDiv.classList.add('resource');
    const headingDiv = document.createElement('div');
    const pageTitle = getMetadata('og:title');
    headingDiv.append(pageTitle);
    blockDiv.append(headingDiv);
  
    block.textContent = '';
    block.append(blockDiv);
}