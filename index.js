//FIRST FUNCTION takeANumber
var deliCounter = [];

function takeANumber(deliCounter, name) {
	deliCounter.push(name);
	return "Welcome, " + name + ". You are number " + deliCounter.length + " in line.";  
}

console.log(takeANumber(deliCounter, "Ada"));
console.log(takeANumber(deliCounter, "Joe"));
console.log(takeANumber(deliCounter, "Frank"));
console.log(takeANumber(deliCounter, "Grace"));

//SECOND FUNCTION nowServing
function nowServing(deliCounter) {
	if (deliCounter.length === 0) {
		return "There is nobody waiting to be served!";	
	}
	else {
		return "Currently serving " + deliCounter.shift() + ".";
	}
}

//THIRD FUNCTION currentLine
function currentLine(deliCounter) {
	var str = "The line is currently: "
	if(deliCounter.length !== 0) {
		for(var i = 0; i < deliCounter.length - 1; i++) {
			str = str + (i + 1) + ". " + deliCounter[i] + ", ";
		}
		var last = deliCounter.slice(-1)[0];
		return str + deliCounter.length + ". " + last;
	}
	else if (deliCounter.length === 0){
		return "The line is currently empty."
	}
}

console.log(currentLine(deliCounter));