/* When the user clicks on the button, it hides or shows the drop down content */
	
	var counter = 0;

	function clickMenu(){
		document.getElementById("dropDownMenu").classList.toggle("show");
	}
	
	window.onclick = function(event) {
		if (!event.target.matches('.sportButton')) {
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
		var increaseButton = document.getElementById("add");
		increaseButton.addEventListener("click", increase, false);
		var decreaseButton = document.getElementById("subtract");
		decreaseButton.addEventListener("click", decrease, false);
		var basketButton = document.getElementById("submit");
		basketButton.addEventListener("click", numOfBaskets, false);
	}
	
	function numOfBaskets(){
		
	}
	
	function increase(){
		++counter;
		var score = document.getElementById("counterDiv");
		score.innerHTML = counter;
	}
	
	function decrease(){
		--counter;
		var score = document.getElementById("counterDiv");
		score.innerHTML = counter;
	}
	
	window.addEventListener("load", loadButtons, false);