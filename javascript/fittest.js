
"use strict";

var total = 0;
var question_id = 0;

document.addEventListener("DOMContentLoaded", function(){
    $(".question").hide(); /// Cacher toutes les questions
    $("#questionnaire").hide(); // Cacher le questionnaire(et le bouton next)
    console.log("hi");
    $(".test_result").hide(); //Cacher les resultats

    // Bouton commencer
    document.getElementById("btn_commencer").addEventListener("click", function(){
        $("#start_fittest").hide();
        $("#questionnaire").show(); // Cacher le questionnaire(et le bouton next)
        question_id = 1;
        $("#q1").show();/// Montrer prémier question
    });


    // Bouton next

    document.querySelector("input#next_question").addEventListener("click", function(){
        if (question_id < 6) {
            console.log("Click next" + question_id);
            $("#q"+question_id).hide(); /// Cacher le question courante
            question_id++; // Avancer à la question suivante
            $("#q"+question_id).show();/// Montrer la nouvelle question
        } else {

            console.log('Conclusion du test');
            $("#questionnaire").hide();
            $('#next_question').hide;

           /* $('.test_result').show();*/

            RESULT();
        }

    });


  // Affichage des resultat:

    function RESULT() {
        var score = 0;
        var choices = document.querySelectorAll('.question input[type="radio"]');
        console.log(choices);

        for (var i = 0 ; i < choices.length ; i++) {

            if (choices[i].checked) {
                score = score + parseInt(choices[i].value);
            }
        }

        console.log(score);
        if (score<= 6) {$(document.getElementById("cardio")).show()}
        if ((score > 6)&&(score<= 12)) {$(document.getElementById("functional")).show()}
        if ((score > 12)&&(score<= 18)) {$(document.getElementById("trainer")).show()}
        if (score > 18) {$(document.getElementById("yoga")).show()}
    }

});



