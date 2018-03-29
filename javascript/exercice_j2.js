// boucle sur les onglets
let tabs = document.getElementsByClassName("tab");
for (let tab of tabs) {

    let tid = tab.getAttribute('id');
    let pid = tid.replace('t','p');

    // qd je clique
    tab.addEventListener("click", function(){

        // boucle sur les onglets
        for (let tab of tabs) {
            if (tab.classList.contains("active")) {
                tab.className = "tab";
            }
        }

        // boucle sur les paragraphes
        let paras = document.querySelectorAll("#cadre p");
        for (let para of paras) {

            let p = para.getAttribute('id');

            // change le style du paragraphe
            if (pid === p) {
                if (!tab.classList.contains("active")) {
                    tab.className += " active";
                }
                para.style.display = "block";
            } else {
                para.style.display = "none";
            }
        }

    });
}
