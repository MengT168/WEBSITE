// ============Date============
const parah = document.querySelector(".parah1");
setInterval(function(){
    const d = new Date().toLocaleTimeString();
    parah.innerHTML = d;
},1001);
// ============End Of Date============

// ============Dark Mode============
const container = document.querySelector(".container");
const switcher =document.querySelector("#switcher");
const mode =document.querySelector(".mode h4");
const h1 =document.querySelector(".container h1");
const iphone =document.querySelector("#Iphone h1");
const body = document.querySelector("body");


switcher.addEventListener("change",function(){
    container.classList.toggle('active');
    mode.classList.toggle('active');
    h1.classList.toggle('active');
    iphone.classList.toggle('active');
    body.classList.toggle('active');
});


// ============End Of Dark Mode============