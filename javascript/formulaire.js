/**
 * Created by osharygi on 2015-12-04.
 */

"use strict";

console.log("Hi");

document.addEventListener('DOMContentLoaded', function() {
    // ATTACHER le gestionnaire validate au submit du formulaire
    document.form_inscription.addEventListener('submit', valider_formulaire);
});


function valider_formulaire(event) {
    console.log('Validtion du formulaire d\'inscrption');
    var resultat = false; // La variable qui définit si le formualaire est valide ou pas
    var message = ''; // Un variable pour afficher un message à l'utilisateur

    // TODO Ici vous devez vous assurer que le nom contient au moins deux (2) caractères

    var nom_ok = (document.form_inscription.nom.value.length >= 2);
    console.log(nom_ok? 'nom valide' : 'nom non valide');


    // TODO Ici vous devez vous assurer que le prénom contient au moins deux (2) caractères
    var prenom_ok = (document.form_inscription.prenom.value.length >= 2);
    console.log(prenom_ok ? 'prenom valide' : 'prenom non valide');

    var re_cell = new RegExp("^[+,0-9]{12}$","g");
    var cell_ok = re_cell.test(document.form_inscription.cell.value);
    console.log(cell_ok? 'cell valide' : 'cell non valide');


    // TODO Ici vous devez vous assurer que le courriel :
    var val_courriel = document.form_inscription.courriel.value;
    var courriel_ok = (val_courriel.length >= 5)
        && (val_courriel.indexOf('@') >= 0) // car @ est présent
        && (val_courriel.indexOf('.') >= 0)  // car . est présent
        && (val_courriel.indexOf('@') < val_courriel.lastIndexOf('.')); // Car @ est avant le .
    console.log(courriel_ok ? 'courriel valide' : 'courriel non valide');


    resultat = nom_ok && prenom_ok && cell_ok && courriel_ok;
    if (! resultat) {
        event.preventDefault(); // Va empêcher la soumission du formulaire
        message = 'Le formulaire n\'est pas valide ! Corrigez SVP';
        alert(message);
    } else {
        message = 'Le formulaire est valide. Il va être soumis. Merci !';
        alert(message)
    }
    return resultat;
}

