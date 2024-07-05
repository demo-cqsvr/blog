import ffetch from '../../scripts/ffetch.js';

export default async function decorate(block) {
    const link = block.querySelector('a');
    const path = link ? link.getAttribute('href') : block.textContent.trim();

    console.log("blog page all:"+path);
    const blogPage = await ffetch(path).limit(2).all();
    console.log( blogPage );

    let resultHTML = "<ul>";
    blogPage.forEach( function(value, index, array) {
        console.log(value.image);
        console.log(array[index]);
        resultHTML += `<li>${index} - <a href="${value.path}"><em>${value.title} </em><img src="${value.image}"></a> </li>`;
    });
    resultHTML += "</ul>";

    // block.innerHTML = `<em> Postlist json: ${path} <br> ${blogPage}</em><br> ${resultHTML}`;
}
