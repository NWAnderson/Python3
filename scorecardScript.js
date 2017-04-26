/* When the user clicks on the button, it hides or shows the drop down content */
	var counter = 0;

	function clickMenu(){
		document.getElementById("dropDownMenu").classList.toggle("show");
	}
	
	window.onclick = function(event) {
		if (!event.target.matches('#dropDownMenuButton')) {
			var dropdowns = document.getElementsByClassName("dropContent");
			for (var i = 0; i < dropdowns.length; i++){
				var openDropDown = dropdowns[i];
				if (openDropDown.classList.contains('show')) {
					openDropDown.classList.remove('show');
				}
			}
		}
	}
	
	function loadButtons(){
		var playerSubmitButton = document.getElementById("playerNumSubmit");
		playerSubmitButton.addEventListener("click", setupScorecard, false);
		// var increaseButton = document.getElementById("add");
		// increaseButton.addEventListener("click", increase, false);
		// var decreaseButton = document.getElementById("subtract");
		// decreaseButton.addEventListener("click", decrease, false);
	}
	
	// this function uses the number of players from input to make
	// a table accomodating the number of players
	function setupScorecard(){
		var userInput = document.getElementById("playerNumField");
		var numberOfPlayers = parseInt(userInput.value);
		var scorecard = document.getElementById("playerNumDiv");
		// scorecard.innerHTML = "<table>" +
		// "<tr><td><b>Hole</b></td>" + 
		// "<td>1</td>" + "<td>2</td>" + "<td>3</td>" + "<td>4</td>" +
		// "<td>5</td>" + "<td>6</td>" + "<td>7</td>" + "<td>8</td>" + "<td>9</td></tr>" +
		// "<tr><td contenteditable>Player 1</td>" + "<td contenteditable></td>" + "<td contenteditable></td>" + "<td contenteditable></td>" + "<td contenteditable></td>" +
		// "<td contenteditable></td>" + "<td contenteditable></td>" + "<td contenteditable></td>" + "<td contenteditable></td>" + "<td contenteditable></td></tr>" + 
		// "<tr><td contenteditable>Player 2</td>" + "<td contenteditable></td>" + "<td contenteditable></td>" + "<td contenteditable></td>" + "<td contenteditable></td>" +
		// "<td contenteditable></td>" + "<td contenteditable></td>" + "<td contenteditable></td>" + "<td contenteditable></td>" + "<td contenteditable></td></tr>" + 
		// "<tr><td contenteditable>Par</td>" + "<td contenteditable>3</td>" + "<td contenteditable>3</td>" + "<td contenteditable>3</td>" + "<td contenteditable>3</td>" +
		// "<td contenteditable>3</td>" + "<td contenteditable>3</td>" + "<td contenteditable>3</td>" + "<td contenteditable>3</td>" + "<td contenteditable>3</td></tr>" + 
		// "</table>"
		// for (var i = 1; i < numberOfPlayers; i++){
			// scorecard.innerHTML = "<td></td>";
		// }
		// scorecard.innerHTML = "</tr></table>";
	}
	
	// function increase(){
		// ++counter;
		// var score = document.getElementById("counterDiv");
		// score.innerHTML = counter;
	// }
	
	// function decrease(){
		// --counter;
		// var score = document.getElementById("counterDiv");
		// score.innerHTML = counter;
	// }
	
	window.addEventListener("load", loadButtons, false);