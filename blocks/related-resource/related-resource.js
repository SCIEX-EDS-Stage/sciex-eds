export default async function decorate(block) { 
    const blockDiv = document.createElement('div');
    block.append(blockDiv);
}