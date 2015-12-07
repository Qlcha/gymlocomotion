/**
 * Created by osharygi on 2015-12-04.
 */



console.log("Hi");

document.addEventListener('DOMContentLoaded', function() {
    // ATTACHER le gestionnaire validate au submit du formulaire
    document.form_inscription.addEventListener('submit', valider_formulaire);
});


function valider_formulaire(event) {
    console.log('Validtion du formulaire d\'inscrption');
    var resultat = false; // La variable qui définit si le formualaire est valide ou pas
    var message = ''; // Un variable pour afficher un message à l'utilisateur

    // TODO Ici vous devez vous assurer que le patronyme contient au moins deux (2) caractères
    var re = new RegExp("^[A-Z][A-Za-z0-9]{1,}$","g"); //
    var patronyme_ok = re.test(document.form_inscription.patronyme.value);

    console.log(patronyme_ok ? 'patronyme valide' : 'patronyme non valide');
    // TODO Ici vous devez vous assurer que le prénom contient au moins deux (2) caractères
    var prenom_ok = (document.form_inscription.prenom.value.length >= 2);
    console.log(prenom_ok ? 'prenom valide' : 'prenom non valide');
    // TODO Ici vous devez vous assurer que le courriel :
    var val_courriel = document.form_inscription.courriel.value;
    var courriel_ok = (val_courriel.length >= 5)
        && (val_courriel.indexOf('@') >= 0) // car @ est présent
        && (val_courriel.indexOf('.') >= 0)  // car . est présent
        && (val_courriel.indexOf('@') < val_courriel.lastIndexOf('.')); // Car @ est avant le .
    console.log(courriel_ok ? 'courriel valide' : 'courriel non valide');

    //      - contient au moins cinq (5) caractères
    //      - que le caractère '@' (arobase) est présent
    //      - que le caractère '.' (point) est présent et après le '@'
    // TODO Ici vous devez vous assurer que le pseudo contient au moins huit (8) caractères
    var pseudo_ok = (document.form_inscription.pseudo.value.length >= 8);
    console.log(pseudo_ok ? 'pseudo valide' : 'pseudo non valide');

    // TODO Ici vous devez vous assurer que le mot de passe :
    //      - contient au moins six (6) caractères
    //      - qu'il contient aussi au moins un chiffre
    var re_mdp = new RegExp("^[0-9A-Za-z]{6,}$","g"); //
    var motdepasse_ok = re_mdp.test(document.form_inscription.motdepasse.value);
    console.log(motdepasse_ok ? 'motdepasse valide' : 'motdepasse non valide');

    resultat = patronyme_ok && prenom_ok && courriel_ok && pseudo_ok && motdepasse_ok;
    if (! resultat) {
        event.preventDefault(); // Va empêcher la soumission du formulaire
        message = 'Le formulaire n\'est pas valide !';
        document.getElementById('msg_info_validation').innerHTML = message;
    } else {
        message = 'Le formulaire est valide. Il va être soumis. Merci !';
        alert(message)
    }
    return resultat;
}

