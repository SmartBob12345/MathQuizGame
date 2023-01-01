var player1_name = localStorage.getItem("player1");
var player2_name = localStorage.getItem("player2");
console.log(player1_name);
console.log(player2_name);
var player1_score = 0;
var player2_score = 0;
console.log(player1_score, player2_score);
document.getElementById("score1").innerHTML = 1;
function send(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " " + "x" + " " + number2 + "<h4>";
    input_box = "<br>Answer: <input type='text' id='input-check-box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = " ";
    document.getElementById("number_2").value = " ";
}
var question_turn = "player1";
var answer_turn = "player2";
function check(){
    get_answer = document.getElementById("input-check-box").value;
    if(get_answer == answer){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            console.log(player1_score);
            document.getElementById("p1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            console.log(player2_score);
            document.getElementById("p2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn == "player2";
        answer_turn == "player1";
        document.getElementById("question_player").innerHTML = "Question Turn - " + player2_name;
        document.getElementById("answer_player").innerHTML = "Answer Turn - " + player1_name;
    }
    else{
        question_turn == "player1";
        answer_turn == "player2";
        document.getElementById("question_player").innerHTML = "Question Turn - " + player1_name;
        document.getElementById("answer_player").innerHTML = "Answer Turn - " + player2_name;
    }
}
