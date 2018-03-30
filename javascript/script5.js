
let tableau = document.getElementById('tableau');

// définit certaines sous parties du tableau
let tparts = tableau.children;
let thead = tableau.querySelector('thead');
let tbody = tableau.querySelector('tbody');
let tfoot = tableau.querySelector('tfoot');


// Bouton d'ajout de colonne
document.getElementById('btncol').onclick = addcol;
function addcol() {

    // parcourt les sous parties (thead, tbody, tfoot)
    for (let tpart of tparts) {

        // localiser la dernière cellule
        let lastr = tpart.querySelector('tr:last-child');
        let lastd = lastr.querySelector('td:last-child');

        // pour chaque sous-partie, on boucle sur les tr
        let tr = tpart.children;
        for (i=0; i < tpart.children.length; i++) {

            // définit un nouveau td
            let newtd = document.createElement('td');

            // si on est dans thead
            if (tpart.tagName === 'THEAD') {
                // on se base sur la valeur du dernier td, auquel on ajoute +1
                newtd.innerHTML = parseInt(lastd.innerHTML) + 1;
            }

            // si on est dans tbody
            if (tpart.tagName === 'TBODY') {

                // initialise un champs input
                let moninput = document.createElement('input');

                // localise la classe x du dernier input
                let x = lastd.children[0].getAttribute('class').split(' ')[0].replace('x','');

                // déduire les classes des inputs créés dans ma nouvelle colonne
                moninput.className += 'x'+ (parseInt(x)+1);
                moninput.className += ' y'+ parseInt(i);
                // console.log(moninput.classList);

                // écoute le input
                moninput.addEventListener("blur", function() {
                    let col = this.className.split(' ')[0];
                    calculerSomme(col);
                });

                // insère le input dans le nouveau td
                newtd.appendChild(moninput);
            }

            // si on est dans tfoot
            if (tpart.tagName === 'TFOOT') {

                // .. initialise la somme de la colonne
                newtd.innerHTML = 0;
            }

            // ajoute le nouveau td
            tr[i].appendChild(newtd);
        }
    }
}

// Bouton d'ajout de rangée
document.getElementById('btnrow').onclick = addrow;
function addrow() {

    // le nouveau tr à ajouter
    let newtr = document.createElement('tr');

    // localiser la dernière cellule
    let lastr = tbody.querySelector('tr:last-child');
    let lastd = lastr.querySelector('td:last-child');

    // .. et la classe y de son input
    let y = lastd.children[0].getAttribute('class').split(' ')[1].replace('y','');

    // parcourt les td avant d'insérer la nouvelle rangée
    for (i=0; i < lastr.children.length ; i++) {

        // .. pour ajouter dans le nouveau tr le bon nombre de td
        let newtd = document.createElement('td');

        // initialise un champs input
        let moninput = document.createElement('input');

        // déduire les classes des inputs créés dans ma nouvelle rangée
        moninput.className += 'x'+ parseInt(i);
        moninput.className += ' y'+ (parseInt(y)+1);
        // console.log(moninput.classList);

        // écoute le input
        moninput.addEventListener("blur", function(){
            let col = this.className.split(' ')[0];
            calculerSomme(col);
        });

        // insère le input dans le nouveau td
        newtd.appendChild(moninput);

        // insère le nouveau td dans le nouveau tr
        newtr.appendChild(newtd);
    }

    // ajoute le tr
    tbody.appendChild(newtr);
}

// Calcul de la somme pour une colonne
function calculerSomme(col)
{
    let column = tbody.getElementsByClassName(col);
    let somme = 0;
    for (let cell of column) {
        let a = parseInt(cell.value);
        if (isNaN(a)) { a = 0; }
        somme += a;
    }
    c = parseInt(col.replace('x',''));
    tfoot.getElementsByTagName('td')[c].innerHTML = somme;
}
