let project1 = document.querySelector("#submit-btn1")
project1.onclick = switchProject1;

function switchProject1(){

    let P = projectdata[0];

    let projecthead1 = document.getElementById("h1head");
    projecthead1.innerHTML = `Project:${P.projectname.name1} is the best`;

}