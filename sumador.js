function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function adder(optag, restag){
	var operation = document.getElementById(optag);
	var operands = operation.innerHTML.split("+");
	var result = parseInt(operands[0]) + parseInt(operands[1]);
	changer(restag, '=' + result);
}

function adderRandom(optag) {
	document.getElementById("res").innerHTML = "";
	var sumandos = document.getElementById(optag);
	sumandos.innerHTML = Math.floor(Math.random()*100) + "+" + Math.floor(Math.random()*100);
}