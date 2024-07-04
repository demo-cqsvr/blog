export default async function decorate(block) {
    const link = block.querySelector('a');
    const path = link ? link.getAttribute('href') : block.textContent.trim();
    block.innerHTML = `<em> postlist json: ${path} </em>`;
}
