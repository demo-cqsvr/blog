import ffetch from '../../scripts/ffetch.js';

export default async function decorate(block) {
    const link = block.querySelector('a');
    const path = link ? link.getAttribute('href') : block.textContent.trim();

    const blogPage = await ffetch(path).sheet('nav').first();
    console.log( blogPage );

    const blogPage2 = await ffetch(path).sheet('raw_index').first();
    console.log( blogPage2 );

    block.innerHTML = `<em> postlist json: ${path} <br> ${postList}</em>`;
}
