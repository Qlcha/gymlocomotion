/**
 * Created by fmeniass on 2015-11-30.
 */

//code du slider

// fin du code silder

//image dynamique
Premier = new Image(250,340);
Premier.src = "images/gallerygym/transformation/femme-avant1.png";
Second = new Image(250,340);
Second.src = "images/gallerygym/transformation/femme-après1.png";

premier = new Image(250,340);
premier.src = "images/gallerygym/transformation/homme-avant1.png";
second = new Image(250,340);
second.src = "images/gallerygym/transformation/homme-après1.png";

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

