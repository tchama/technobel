// 0
function maFonction() {
    console.log("Ready !");
}


// 1
// fonction anonyme, isolée
(function (a){
    let b = 5;
    let mv = "code exécuté mais isolé. la variable b est protégée. ";
    alert( mv + a + ' ' + b );
})(42);

/*

// 2
console.log(navigator);
navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
}, function(){
    alert("impossible de récupérer votre position");
});

// 3
// rafraichit la page
// window.location.reload();

*/

// 4
let ele = document.getElementById("monid");
console.log(ele);
//
let elems = document.getElementsByClassName("maclasse");
for (let elem of elems) {
    console.log(elem);
}
//
let ab = document.getElementById("monparagraphe");
console.log(ab.innerHTML);
console.log(ab.innerText);

// 5
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let child = document.getElementById("para1");
    let parent = child.parentNode;
    parent.removeChild(child);
});
//
let lien = document.getElementById("lien");
lien.setAttribute("href", "http://domainepublic.net");
//
let par2 = document.getElementById("par");
console.log(par2.previousSibling);
console.log(par2.previousElementSibling);
//
console.log(document.querySelector("#liste li:nth-child(2)"));
//
let btn2 = document.querySelector("#btn2");
let lis = document.querySelectorAll("#liste li");
let collapse = false;
btn2.addEventListener("click", function(){
    if (!collapse) {
        for (li of lis) {
            li.style.display = "none";
        }
        collapse = true;
    } else {
        for (li of lis) {
            li.style.display = "block";
        }
        collapse = false;
    }
});
// la meme chose en jquery
//$("#btn2").click(function(){$("li").toggle(500);});

// 6
let span = document.getElementById("time");
window.setInterval(function(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    span.innerHTML = `${hour}:${min<10 ? "0"+min : min}:${sec}`;
}, 1000);

// chrono
(function (){
    let chrono = document.getElementById("chrono");
    let start_btn = document.getElementById("start");
    let stop_btn = document.getElementById("stop");
    let timer;
    let time = 0;
    start_btn.addEventListener("click", function(){
        timer = window.setInterval(function(){
            time += 100;
            let nb_milli = time%1000;
            let nb_sec = ((time - nb_milli) / 1000) % 60;
            let nb_min = (time - (1000 * nb_sec) - nb_milli) / 60000;
            chrono.innerHTML = `${nb_min}:${nb_sec}:${nb_milli}`;
        }, 100);
    });
    stop_btn.addEventListener("click", function(){
        window.clearInterval(timer);
    });
})();

//
let pr = document.querySelector(".pr");
let btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function(){
    let size = parseInt(getComputedStyle(pr).fontSize);
    if (isNaN(size)) {
        size = 12;
    }
    size += 5;
    pr.style.fontSize = size + "px";
});

//
let div2 = document.getElementById("div2");
console.log(div2.offsetLeft);
console.log(div2.offsetParent);
