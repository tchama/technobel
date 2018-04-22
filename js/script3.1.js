// les images
let images = document.querySelectorAll("#slider img");

// boucle sur les onglets
let tabs = document.getElementsByClassName("tab");
for (let tab of tabs) {

    let tid = tab.getAttribute('id');
    let imgid = tid.replace('t','img');

    // qd je clique
    tab.addEventListener("click", function(){

        // boucle sur les onglets
        for (let tab of tabs) {
            if (tab.classList.contains("active")) {
                tab.className = "tab";
            }
        }

        // boucle sur les images
        for (let image of images) {

            let p = image.getAttribute('id');

            // change le style de l'image
            if (imgid == p) {
                if (!tab.classList.contains("active")) {
                    tab.className += " active";
                }
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        }
    });
}

// défilement automatique
let cpt = 0;
window.setInterval(function(){

    // incrémente le compteur, avec modulo pour boucler
    cpt = (cpt + 1) % images.length;

    // cache les images
    for (let image of images) {
        image.style.display = "none";
    }

    // enlève l'onglet active
    for (let tab of tabs) {
        if (tab.classList.contains("active")) {
            tab.className = "tab";
        }
    }

    // affiche l'image et active l'onglet
    let img = document.querySelector("#img" + cpt);
    img.style.display = "block";

    let active = document.querySelector("#t" + cpt)
    active.className += " active";

}, 2000);
