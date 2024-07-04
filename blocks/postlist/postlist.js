import ffetch from '../../scripts/ffetch.js';

export default async function decorate(block) {
    const link = block.querySelector('a');
    const path = link ? link.getAttribute('href') : block.textContent.trim();

    console.log("blog page all:")
    const blogPage = await ffetch(path).limit(2).all();
    console.log( blogPage );

    let resultHTML = "";
    blogPage.forEach( function(value, index, array) {
        console.log(value);
        console.log(array[index]);
        resultHTML += `(${index} - ${value.title}) <br>`;
    });

    block.innerHTML = `<em> Postlist json: ${path} <br> ${blogPage}</em><br> ${resultHTML}`;
}
