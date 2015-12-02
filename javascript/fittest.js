/**
 * Created by osharygi on 2015-12-01.
 */

"use strict";

var total = 0;
var question_id = 0;

document.addEventListener("DOMContentLoaded", function(){
    $(".question").hide(); /// Cacher toutes les questions
    $("#questionnaire").hide(); // Cacher le questionnaire(et le bouton next)
    console.log("hi");

    // Bouton commencer
    document.getElementById("btn_commencer").addEventListener("click", function(){
        $("#questionnaire").show(); // Cacher le questionnaire(et le bouton next)
        question_id = 1;
        $("#q1").show();/// Montrer la nouvelle question
    });


    // Bouton next

    document.querySelector("input#next_question").addEventListener("click", function(){
        console.log("Click next");
        $("#q"+question_id).hide(); /// Cacher le question courante
        question_id++; // Avancer à la question suivante
        switch (question_id) {
            case 1:
                q1();
                break;
            case 2:
                q2();
                break;
            case 1:
                q1();
                break;
            case 1:
                q1();
                break;
            case 1:
                q1();
                break;
            case 1:
                q1();
                break;
        };
        $("#q"+question_id).show();/// Montrer la nouvelle question
    });

});

/*

total = 0;

function q1(arg){
    switch(arg){
        case 1:{total += 2; break}
        case 2:{total += 2; break}
        case 3:{total += 2; break}
        case 4:{total += 2; break}
        case 5:{total += 2; break}
    }


    document.getElementById('q1').style.display = 'none';
    document.getElementById('q2').style.display = 'block';
}


function q2(arg){
    switch(arg){
        case 1:{total += 2; break}
        case 2:{total += 2; break}
        case 3:{total += 2; break}
        case 4:{total += 2; break}
        case 5:{total += 2; break}
    }

    function q22(arg){
        switch(arg) {
            case 1:
            {
                total += 2;
                break
            }
            case 2:
            {
                total += 2;
                break
            }
            case 3:
            {
                total += 2;
                break
            }
        }
    document.getElementById('q2').style.display = 'none';
    document.getElementById('q3').style.display = 'block';
}
function q3(arg) {
    switch (arg) {
        case 1:{total += 2; break}
        case 2:{total += 2; break}
        case 3:{total += 2; break}
        case 4:{total += 2; break}
    }
    document.getElementById('q3').style.display = 'none';
    document.getElementById('q4').style.display = 'block';
    }

function q4(arg){
    switch(arg){
        case 1:{total += 2; break}
        case 2:{total += 2; break}
        case 3:{total += 2; break}
        case 4:{total += 2; break}
    }
    document.getElementById('q4').style.display = 'none';
    document.getElementById('q5').style.display = 'block';
}

function q5(arg){
    switch(arg){
        case 1:{total += 2; break}
        case 2:{total += 2; break}
        case 3:{total += 2; break}
        case 4:{total += 2; break}
    }
    document.getElementById('q5').style.display = 'none';
    document.getElementById('q6').style.display = 'block';
}

function q6(arg){
    switch(arg){
        case 1:{total += 2; break}
        case 2:{total += 2; break}
        case 3:{total += 2; break}
        case 4:{total += 2; break}
    }
    document.getElementById('q6').style.display = 'none';
    console.log(total);

}}
*/


/*
</head>
<body>
<div id='one'>
1. Сколько времени вы провели на нашем сайте:
    <input type='button' onclick='one(1)' value='15 минут'>
<input type='button' onclick='one(2)' value='30 минут'>
<input type='button' onclick='one(3)' value='60 минут'>
</div>
<div id='two' style='display:none'>
2. За это время какой контент вы посмотрели:
    <input type='button' onclick='two(1)' value='Истории'>
<input type='button' onclick='two(2)' value='Картинки'>
<input type='button' onclick='two(3)' value='Видео'>
</div>
<div id='three' style='display:none'>
3. Какие эмоции вы испытывали:
    <input type='button' onclick='three(1)' value='Не каких'>
<input type='button' onclick='three(2)' value='Усмехались'>
<input type='button' onclick='three(3)' value='Смеялись'>
</div>*/
