let project1 = document.querySelector("#submit-btn1")
project1.onclick = switchProject1;

let project2 = document.querySelector("#submit-btn2")
project2.onclick = switchProject2;

let project3 = document.querySelector("#submit-btn3")
project3.onclick = switchProject3;

function switchProject1(){

    let P = projectdata[0];

    let projecthead1 = document.getElementById("h1head");
    projecthead1.innerHTML = `Project:${P.projectname.name1} `;

    let pImg = document.querySelector("#img");
    pImg.src = `${P.projectimg.img1}.`;

    let description = document.getElementById("context");
    description.innerHTML = `${P.projectcontext.cyoa}`;

    let link = document.getElementById("link");
    link.href = `${P.projectlink.link1}`;
}

function switchProject2(){

    let P = projectdata[0];

    let projecthead1 = document.getElementById("h1head");
    projecthead1.innerHTML = `Project:${P.projectname.name2} `;

    let pImg = document.querySelector("#img");
    pImg.src = `${P.projectimg.img2}`;

    let description = document.getElementById("context");
    description.innerHTML = `${P.projectcontext.fp}`;

    let link = document.getElementById("link");
    link.href = `${P.projectlink.link2}`;

}

function switchProject3(){

    let P = projectdata[0];

    let projecthead1 = document.getElementById("h1head");
    projecthead1.innerHTML = `Project:${P.projectname.name3} `;

    let pImg = document.querySelector("#img");
    pImg.src = `${P.projectimg.img3}.`;

    let description = document.getElementById("context");
    description.innerHTML = `${P.projectcontext.fake_movie}`;


    let link = document.getElementById("link");
    link.href = `${P.projectlink.link3}`;

}