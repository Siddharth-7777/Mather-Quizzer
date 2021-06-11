var player1 = localStorage.getItem("name1")
var player2 = localStorage.getItem("name2")
var score1 = 0;
var score2 = 0;
document.getElementById("player1_name").innerHTML = player1 + ":"
document.getElementById("player2_name").innerHTML = player2 + ":"
document.getElementById("score1").innerHTML = score1
document.getElementById("score2").innerHTML = score2
document.getElementById("player_question").innerHTML = "Question Master Mult: " + player1
document.getElementById("player_answer").innerHTML = "Answer Blaster Halt: " + player2

function send() {
    var n1 = document.getElementById("word").value;
    var n2 = document.getElementById("word2").value;
    var corval = parseInt(n1) * parseInt(n2);
    localStorage.setItem("corval", corval)
    qw = "<h4>Question: " + n1 + " x " + n2 + "</h4>"
    ib = "<br>Answer: <input type='text' id='answer'>"
    cb = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = qw + ib + cb;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    document.getElementById("word2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    var corval = localStorage.getItem("corval")
	get_answer = document.getElementById("answer").value;
	if(get_answer == corval)	
	{
		if(answer_turn == "player1")
		{
			score1 = score1 +1;
		    document.getElementById("score1").innerHTML = score1;
		}
		else 
		{
			score2 = score2 +1;
		    document.getElementById("score2").innerHTML = score2;
		}
	}
	
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Master Mult: " + player2;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Master Mult: " + player1;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Blaster Halt: " + player2;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Blaster Halt: " + player1;
	}
    
    document.getElementById("output").innerHTML = "";
}

