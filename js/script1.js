
// 1
// messages en console
console.log('test');
console.table(['test1', 2, 42]);

// 2
// message dans une popup
alert('hello world !');
// popup avec un input
let result = prompt("Entrez un nombre");
// let = var, mais let est recommandé W3C maintenant
// affichage de la variable, convertie en string
console.log(result + 1);
// la variable est transformée en int
console.log(parseInt(result) + 1);

// 3
// tableau
let tab = ['test','test2'];
tab[0];
// dictonnaire
let dico = {        // tableau associatif
    key1: "test1",
    key2: "test2"
}
dico["key1"];
dico.key1;

// 4
// tableau de tableau (>< multidimentionnel)
let tabImbrique = [
    20,
    'test',
    [
        "test2",
        45,
        true
    ]
];

// 5
// splice
tabImbrique.splice(2,1,3);
console.table(tabImbrique);
// slice
let tab2 = tabImbrique.slice(1,3);
console.table(tab2);

// 6
// string format
let string2;
let string3;
let string = `Hello ${string2} test ${string3}`;
// rappelle console.WriteLine($"coucou {machin}") en C#

// 7
// exercices
let chaine = "ma formation javascript";
// retourner la position de ma
console.log(chaine.indexOf('ma'));
// indice de la lettre p
console.log(chaine.indexOf("p"));
// retrouver la lettre 21
console.log(chaine.charAt(21));
// remplacer par
console.log(chaine.replace("script",""));
// decouper la chaine
console.log(chaine.split(" "));
// prototypage d'une methode reverse pour les strings
String.prototype.reverse = function()
{
    // inverse la chaine de caractères
    let table = [];
    for (let i = 0; i < chaine.length; i++) {
        table.push(chaine[i]);
    }
    table = table.reverse();
    return table.join("");
}
console.log(chaine.reverse());

// 8
// Date
let today = new Date();
console.log(today.getDate());
console.log(today.getMonth());

// 9
// exercice p.87
let price = parseInt(prompt("prix du livre ?"));
let quantity = parseInt(prompt("nombre de livres ?"));
let total = (price * quantity)*1.21;
console.log(total);

// 10
let liste = [ 'test1', 'test2', 'test3'];
// boucle sur les indices
for (let item in liste) {
    console.log(item);
}
// boucle sur les valeurs
for (let item of liste) {
    console.log(item);
}

// 11
// exercice p.97
let dow = [ 'dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
let today2 = new Date();
let nbjour = today2.getDay();
console.log(`Bonjour, nous sommes ${dow[nbjour]}`);

// 12
// exercice p.98
let nblignes = parseInt(prompt('Nbre de lignes ?'))
let mot = "A";
for (var i = 0; i < nblignes; i++) {
    mot += "A"
    console.log(mot);
}

// 13
// fonctions
function maFunction(a){
    return a**3;
}
console.log(maFunction(2));
// ou
let ouCommeCa = function(a){
    return a**3;
}
console.log(ouCommeCa(2));

// un événement, avec une fonction anonyme (cfr. délégué)
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    alert("On a clické ?");
});

// 14
// passé par valeur
function change(a) {
    a = 6;
}
let b = 5
change(b);
console.log(b);  // 5
// passé par référence
function change2(c) {
    c[0] = 6;
}
let d = [5];
change2(d);
console.log(d);  // 6
