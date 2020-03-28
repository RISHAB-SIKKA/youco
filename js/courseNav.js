// let btn2 = document.getElementById('btn2');
// let btn3 = document.getElementById('btn3');
// let btn4 = document.getElementById('btn4');
// let btn5 = document.getElementById('btn5');
let btnContent2 = document.getElementById('gs-btn-2');
let btnContent3 = document.getElementById('gs-btn-3');
let btnContent4 = document.getElementById('gs-btn-4');
let btnContent5 = document.getElementById('gs-btn-5');
let btnContent0 = document.getElementById('gs-btn-0');
let btn = document.querySelectorAll('.gs-button'); 
btn = Array.from(btn);

btn[1].addEventListener('click',pressed1);
btn[2].addEventListener('click',pressed2);
btn[3].addEventListener('click',pressed3);
btn[4].addEventListener('click',pressed4);

function pressed1(e){
    btnContent0.style.display = "none";
    btn[1].style.background = "#1ba94c";
    btn[2].style.background = "none";
    btn[2].style.color = "#39424e";
    btn[3].style.background = "none";
    btn[3].style.color = "#39424e";
    btn[4].style.background = "none";
    btn[4].style.color = "#39424e";
    btn[1].style.color = "#eee";

    // btnContent1.style.zIndex="0";
    btnContent2.style.zIndex="1";
    btnContent3.style.zIndex="0";
    btnContent4.style.zIndex="0";
    btnContent5.style.zIndex="0";
    // btnContent1.style.height="0";
    btnContent2.style.height="89vh";
    btnContent3.style.height="0";
    btnContent4.style.height="0";
    btnContent5.style.height="0";
    // btnContent1.style.opacity="0";
    btnContent2.style.opacity="1";
    btnContent3.style.opacity="0";
    btnContent4.style.opacity="0";
    btnContent5.style.opacity="0";
}
function pressed2(e){
    btnContent0.style.display = "none";
    btn[1].style.background = "none";
    btn[1].style.color = "#39424e";
    btn[2].style.background = "#1ba94c";
    btn[2].style.color = "#eee";
    btn[3].style.background = "none";
    btn[3].style.color = "#39424e";
    btn[4].style.background = "none";
    btn[4].style.color = "#39424e";
    btn[2].style.color = "#eee";

    // btnContent1.style.zIndex="0";
    btnContent2.style.zIndex="0";
    btnContent3.style.zIndex="1";
    btnContent4.style.zIndex="0";
    btnContent5.style.zIndex="0";
    // btnContent1.style.height="0";
    btnContent2.style.height="0";
    btnContent3.style.height="89vh";
    btnContent4.style.height="0";
    btnContent5.style.height="0";
    // btnContent1.style.opacity="0";
    btnContent2.style.opacity="0";
    btnContent3.style.opacity="1";
    btnContent4.style.opacity="0";
    btnContent5.style.opacity="0";
}
function pressed3(e){
    btnContent0.style.display = "none";
    btn[1].style.background = "none";
    btn[1].style.color = "#39424e";
    btn[2].style.background = "none";
    btn[2].style.color = "#39424e";
    btn[3].style.background = "#1ba94c";
    btn[3].style.color = "#eee";
    btn[4].style.background = "none";
    btn[4].style.color = "#39424e";

    // btnContent1.style.zIndex="0";
    btnContent2.style.zIndex="0";
    btnContent3.style.zIndex="0";
    btnContent4.style.zIndex="1";
    btnContent5.style.zIndex="0";
    
    // btnContent1.style.height="0";
    btnContent2.style.height="0";
    btnContent3.style.height="0";
    btnContent4.style.height="89vh";
    btnContent5.style.height="0";
    // btnContent1.style.opacity="0";
    btnContent2.style.opacity="0";
    btnContent3.style.opacity="0";
    btnContent4.style.opacity="1";
    btnContent5.style.opacity="0";
}
function pressed4(e){
    btnContent0.style.display = "none";
    btn[1].style.color = "#39424e";
    btn[1].style.background = "none";
    btn[2].style.color = "#39424e";
    btn[2].style.background = "none";
    btn[3].style.color = "#39424e";
    btn[3].style.background = "none";
    btn[3].style.color = "#39424e";
    btn[4].style.background = "#1ba94c";
    btn[4].style.color = "#eee";
    // btnContent1.style.zIndex="0";
    btnContent2.style.zIndex="0";
    btnContent3.style.zIndex="0";
    btnContent4.style.zIndex="0";
    btnContent5.style.zIndex="1";
    // btnContent1.style.height="0";
    btnContent2.style.height="0";
    btnContent3.style.height="0";
    btnContent4.style.height="0";
    btnContent5.style.height="89vh";
    // btnContent1.style.opacity="0";
    btnContent2.style.opacity="0";
    btnContent3.style.opacity="0";
    btnContent4.style.opacity="0";
    btnContent5.style.opacity="1";
}
