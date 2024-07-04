import ffetch from '../../scripts/ffetch.js';

export default async function decorate(block) {
    const link = block.querySelector('a');
    const path = link ? link.getAttribute('href') : block.textContent.trim();

    const postList = await ffetch(path);
    console.log( postList );

    block.innerHTML = `<em> postlist json: ${path} <br> ${postList}</em>`;
}
