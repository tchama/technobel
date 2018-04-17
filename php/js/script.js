
/*
 *  Debug toggle
 */
let bouton = document.querySelector('button#dtoggle');
let debug = document.querySelector('div#debug');
let collapse = false;
bouton.addEventListener("click", function(){
    if (!collapse) {
        debug.style.display = "none";
        collapse = true;
    } else {
        debug.style.display = "block";
        collapse = false;
    }
});
