let nombre_courant = "";

function addNombre(nombre) {
    nombre_courant += nombre;
    afficher();
}
function operator(op) {
    nombre_courant += "" + op + "";
    afficher();
}
function calcul() {
    nombre_courant = eval(nombre_courant)
    afficher();
}
function pourcent() {
    nombre_courant /= 100;
    afficher();
}
function supprimer_un() {
    let taille = nombre_courant.length;
    if (taille > 0) {
        nombre_courant = nombre_courant.substring(0, taille - 1);
    }
    afficher();
}
function supprimer_tous() {
    nombre_courant = ""
    afficher();
}
function afficher() {
    document.getElementById("screen").innerHTML = nombre_courant;
}