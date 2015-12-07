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

//mettre en majuscule la 1ère lettre du paragraphe

function premiere_lettre(){

var mot = document.getElementById("majuscule").value;

mot.charAt(0).toUpperCase();
}
//fin de la majuscule

//mettre le code flash sur le titre h2

function titre(){
   var couleur = document.getElementById('flash');

// The JavaScript Source!! http://javascript.internet.com
    function initArray() {
        this.length = initArray.arguments.length;
        for (var i = 0; i < this.length; i++) {
            this[i] = initArray.arguments[i];
        }
    }

    var couleur = "PROFESSIONNELS ACCRÉDITÉS";
    var x = 0;
    var color = new initArray(
        "red",
        "blue",
        "green",
        "black"
    );

    {
        document.write('<div id="c" align="center">'+ctext+'</div>');
    }
    function chcolor(){
        {
            document.all.c.style.color = color[x];
        }
        (x < color.length-1) ? x++ : x = 0;
    }
    setInterval("chcolor()",1000);



}
//fin du flash titre h2
