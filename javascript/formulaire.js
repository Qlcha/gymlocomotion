/**
 * Created by osharygi on 2015-12-04.
 */

"use strict";

console.log("Hi");

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inscription').addEventListener('click', valider_formulaire);
    document.form_inscription.addEventListener('submit', form_submit);
    $('#valide').hide();
});


function valider_formulaire() {
    console.log('Validtion du formulaire d\'inscrption');
    var resultat = false;
    var message = '';


    var nom_ok = (document.form_inscription.nom.value.length >= 2);
    console.log(nom_ok? 'nom valide' : 'nom non valide');



    var prenom_ok = (document.form_inscription.prenom.value.length >= 2);
    console.log(prenom_ok ? 'prenom valide' : 'prenom non valide');

    var re_cell = new RegExp("^[+,0-9]{12}$","g");
    var cell_ok = re_cell.test(document.form_inscription.cell.value);
    console.log(cell_ok? 'cell valide' : 'cell non valide');



    var val_courriel = document.form_inscription.courriel.value;
    var courriel_ok = (val_courriel.length >= 5)
        && (val_courriel.indexOf('@') >= 0)
        && (val_courriel.indexOf('.') >= 0)
        && (val_courriel.indexOf('@') < val_courriel.lastIndexOf('.'));
    console.log(courriel_ok ? 'courriel valide' : 'courriel non valide');


    resultat = nom_ok && prenom_ok && cell_ok && courriel_ok;
    if (! resultat) {
        message = 'Le formulaire n\'est pas valide ! Corrigez SVP';
        alert(message);
    } else {
       /* message = 'Le formulaire est valide. Il va être soumis. Merci !';
        alert(message)*/
        $('#fieldset').hide();
        $("#valide").show();
    }
    return false;
}

function form_submit(event) {
    console.log('form_submit');
    var resultat = true;
    return resultat;
}
