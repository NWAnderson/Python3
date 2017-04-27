var numOfColumns = 10;
var numOfPlayers = 0;

function loadButtons(){
	var playerSubmit = document.getElementById("playerNumSubmit");
	playerSubmit.addEventListener("click", makeScorecard, false);
	var calculate = document.getElementById("calculateButton");
	calculate.addEventListener("click", calculateScore, false);
}

// this function uses the number of players from input to make
// a table accomodating the number of players
function makeScorecard(){
	document.getElementById("calculateButton").disabled = false;
	var scorecard_container = document.getElementById("scorecard");
	numOfPlayers = parseInt(document.getElementById("playerNumField").value);
	/* Table load  */
	if (numOfPlayers >= 1 && numOfPlayers <= 4){
		var thead = "<table>\n";
		var tbody = '<td><b>Hole</b></td>';
		for (var columnNum = 1; columnNum < numOfColumns; columnNum++){
			tbody += '<td>'
			tbody += columnNum;
			tbody += "</td>";
		}
		tbody += '<tr><td><b>Par</b></td>';
		for (var columnNum = 1; columnNum < numOfColumns; columnNum++){
			tbody += '<td>'
			tbody += '<input id ="parCell" value="3">';
			tbody += "</td>";
		}
		for (var i = 1; i <= numOfPlayers; ++i){
			tbody += '<tr class="playerRow">';
			tbody += '<td><input id="playerCell" value="Player ';
			tbody += i;
			tbody += '"</td>';
			for (var j = 1; j < numOfColumns; j++){
				tbody += '<td>';
				tbody += '<input id ="scoreCell" class="scoreCell"';
				tbody += 'j"></td>';
			}
			tbody += '</tr>\n';
		}
		var tfooter = '</table>\n\n';
	scorecard_container.innerHTML = thead + tbody + tfooter;
	}
	else{
		alert("Enter a number of players from 1 - 4.");
	}
}

function calculateScore(){
	var totalScore = 0;
	totalScore = parseInt(document.getElementById("scoreCell").value);
	document.writeln(totalScore);
	var result_container = document.getElementById("calculatedResult");
	var scorecard_container = document.getElementById("scorecard");
	// for (var i = 2; i < numOfPlayers; i++){
		// document.writeln("3234523");
		// for (var j = 2; j < numOfColumns; j++){
			// totalScore += parseInt(scorecard_container.table.tr[i].td[j]).value;
		// }
	// }
	// result_container.innerHTML = "Your total score is " + totalScore;
}
window.addEventListener("load", loadButtons, false);