/**
 * Created by fmeniass on 2015-11-30.
 */

//image dynamique
Premier = new Image(250,340);
Premier.src = "images/gallerygym/transformation/femme-avant1.png";
Second = new Image(250,340);
Second.src = "images/gallerygym/transformation/femme-après1.png";

//fin image dynamique

//générer mot de passe pour accéder à l'onglet horaire

function newDoc() {
    var mot_de_passe = "12345";

    var mtd_user = prompt("entrez le mot un mot de passe:");

    if (mtd_user == mot_de_passe){

        window.location.assign('http://gymlocomotion.projetisi.com/pages/horaire.html');
    }else{
        window.location.assign('http://gymlocomotion.projetisi.com/index.html');
    }

}
// fin pour le mot de passe

//debut lightbox
function affiche(){
    document.getElementById("demo").innerHTML = "514-526-8941";
}
function affiche1(){

    document.getElementById("demo1").innerHTML = "gymlocomotion@gmail.com";
}
//fin lightbox

//Debut jeu

function jeux(){
    /*
    var total = 0;
    var play = false;
    function display(element) {
        var now = new Date();
        if (!play) {
            play = true;
            startTime = now.getTime()}
        if (now.getTime() - startTime > 20000) {
            element.checked = !element.checked;
            return
        }
        if (element.checked)
            total++;
        else
            total--;
        element.form.num.value = total
    }
    function restart(form) {
        total = 0;
        play = false;
        for (var i = 1; i <= 100; ++i) {
            form.elements[i].checked = false
        }
    }
    */
    document.getElementById("divers").innerHTML ="bonjour";
}

//fin jeu

//click sur image de la page équipe

var mon_image = document.getElementById('image');

function click_image() {

    this.src = "../images/prof.jpg";
}
mon_image.addEventListener("click", click_image);

// fin du click
