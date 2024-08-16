import ffetch from '../../scripts/ffetch.js';

export default async function decorate(block) {
    console.log(" --- marubatsu ---");
    const maru_batsu = block.querySelectorAll('p');
    console.log( maru_batsu );
    maru_batsu.forEach((elm) => {
      elm.style.color = 'red';
      elm.classList.add('done');
      if(elm.textContent=="1") elm.style.color="blue";    
    });


    // const path = link ? link.getAttribute('href') : block.textContent.trim();

    // console.log("blog page all:"+path);

    // const limit = block.querySelector('h1');
    // const limit_num = limit ? limit.getAttribute('id'):"100";
    // console.log("limit num:"+ limit_num);

    // const blogPage = await ffetch(path).limit(parseInt(limit_num)).all();
    // console.log( blogPage );

    // let resultHTML = "<ul>";
    // blogPage.forEach( function(value, index, array) {
    //     console.log(value.image);
    //     console.log(array[index]);
    //     resultHTML += `<li>${index} - <a href="${value.path}"><em>${value.title} </em><img src="${value.image}"></a> </li>`;
    // });
    // resultHTML += "</ul>";

    // block.innerHTML = `<em> Postlist json: ${path} <br> ${blogPage}</em><br> ${resultHTML}`;
}

