function ASC (a, b) {
    a = a[1];
    b = b[1];
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

function DESC (a, b) {
    a = a[1];
    b = b[1];
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
}

function sortTable(table, col, tri) {

    // la zone à trier
    let tbody = document.getElementById(table).getElementsByTagName('tbody')[0];

    // une liste des rangées
    let rows = tbody.getElementsByTagName('tr');

    // crée un nouveau tableau vide
    let resort = new Array();

    // boucle pour y empiler les données triées
    for (let row of rows) {

        let sortcol = row.getElementsByTagName('td')[col].innerHTML;
        resort.push([row, sortcol]);
    }

    // trie le tableau selon la fonction ASC ou DESC
    // resort.sort(tri) ne fonctionne pas !!!
    if (tri === 'ASC') {
        resort.sort(ASC);
    }
    if (tri === 'DESC') {
        resort.sort(DESC);
    }

    // injecte les rangées triées
    for (var i = 0; i < resort.length; i++) {
        tbody.appendChild(resort[i][0]);
    }

}

// boucle sur les boutons
let buttons = document.getElementsByTagName('button');
for (let btn of buttons) {

    // quand on clique sur un bouton
    btn.addEventListener("click", function(){

        // l'id du bouton permet de calculer la colonne et le mode de tri
        let col = btn.getAttribute('id').replace("btncol","").split("_")[0];
        let tri = btn.getAttribute('id').replace("btncol","").split("_")[1].toUpperCase();

        // appelle la fonction
        sortTable('tableau', col, tri);

    });
}
