// LES EVENEMENTS

// 1
function maFonction() {
    console.log('ma fonction');
}

document.getElementById("toto").onclick = maFonction;
// OU
document.getElementById("toto").addEventListener("click", maFonction);
// fonction sans parenthèses, parce qu'on l'assigne, on ne l'appelle pas !!

/*
document.getElementById("toto").onclick = function (e) {
    maFonction(arg1, arg2);
}
// une fonction intermédiaire qui permet à une autre fonction de passer des paramètres
*/

// 2
// exercice
let list = document.getElementById('liste');
let button = document.getElementById('ajoutelement');

button.addEventListener('click', function() {

    let input = document.getElementById('textelement');
    let text = input.value;
    input.value = "";

    let item = document.createElement('li');
    item.innerHTML = text;

    list.appendChild(item);

});


// 3
let tableau = document.getElementById('tableau');
let panier = document.getElementById('panier');

// parcourt les boutons
let buttons = tableau.getElementsByClassName('btn');
for (let button of buttons) {

    let row = button.parentNode.parentNode;
    let libelle = row.childNodes[1].innerHTML;
    let valeur = row.childNodes[3].innerHTML;

    // quand on clique sur un bouton
    button.addEventListener("click", function(){

        // on crée une rangée (newrow) avec un id
        let nRow = document.createElement('tr');
        let nID = row.getAttribute('id');
        nRow.id = nID;

        // .. un td libellé
        let nLib = document.createElement('td');
        nLib.innerHTML = libelle;
        nRow.appendChild(nLib);

        // .. un td valeur
        let nVal = document.createElement('td');
        nVal.innerHTML = valeur;
        nRow.appendChild(nVal);

        // on parcourt toutes les rangées du panier
        let articles = panier.querySelectorAll("#panier tr");
        let panID = new Array();

        // .. à la recherche des ids du panier qu'on met dans un tableau
        for (let article of articles) {
            panID.push(article.getAttribute('id'));  // r2
        }
        console.log('--\npanier: '+ panID);

        // si la rangée est déjà dans le panier
        if (panID.includes(nID)) {

            // on ajoute +1 à la rangée existante
            let Qte = parseInt(panier.querySelector("#panier tr#"+nID+" td:nth-child(3)").innerHTML);
            panier.querySelector("#panier tr#"+nID+" td:nth-child(3)").innerHTML = Qte +1 ;

            console.log("+1 pour "+ nID +". new quantité: "+ (Qte +1 ) );

        } else {
        // sinon

            // on ajoute un td pour la quantité initiale
            let nQte = document.createElement('td');
            nQte.innerHTML = 1;
            nRow.appendChild(nQte);

            // on ajoute un td pour effacer
            let nDrop = document.createElement('td');
            nDrop.innerHTML = '<button class="btn">Enlever</button>';
            nRow.appendChild(nDrop);

            // puis hop on glisse la rangée dans le panier
            console.log('Ajouter au panier: '+ nID);
            panier.appendChild(nRow);
        }

        // enfin on calcule le total
        let total = document.getElementById('total');
        total.value = parseInt(total.value) + parseInt(nVal.innerHTML);

        // --
        // enlever un article du panier
        let dropbtns = panier.getElementsByClassName('btn');
        for (let dropbtn of dropbtns) {
            dropbtn.addEventListener("click", function(){
                console.log(this.parentNode.parentNode);
            });
        }

    });

}
