
/*Create an array, (katzDeliLine) that represents
	the current line of people*/

var katzDeliLine = [];

/*Build a function called takeANumber that:
	1. Accepts the new customers name
	2. accepts katzDeliLine(the current line of people)
	3. returns their place in line*/

function takeANumber(katzDeliLine, name) {
	katzDeliLine.push(name); {
		return("Welcome, " + name + ". "
			+ "You are number " + katzDeliLine.length + " in line.");
	}
}
//
// /*Build a function nowServing that:
// 	1. returns the first person in line
// 	2. removes them from the line.
// 	3. If nobody is in line, returns
// 		"There is nobody waiting to be served!"*/
//
//
function nowServing(katzDeliLine){
	if (katzDeliLine.length > 1) {
		return ("Currently serving " + katzDeliLine.shift() + ".");
			} else
				return("There is nobody waiting to be served!");
}

//
// function nowServing(katzDeliLine){
// 	if (katzDeliLine.length < 1) {
// 		return ("There is nobody waiting to be served!");
// 		} else
// 			return("Currently serving " + katzDeliLine.shift() + ".");
// }
//
//
// /* Build a function currentLine that:
// 	1. returns the array katzDeliLine
// 		example: currentLine(katzDeliLine) would return
// 		"The line is currently: 1. Ada, 2. Grace".
// 	2. If nobody is in line, returns
// 		"The line is currently empty"*/


function currentLine(katzDeliLine){
	var currentKatzDeliLine = []
	if (katzDeliLine.length < 1) {
		return ("The line is currently empty.")
	} else {
		for(var i = 0; i < katzDeliLine.length; i++) {
			currentKatzDeliLine += (i+1) + ". " + katzDeliLine[i] + ", " ;
	}
		currentKatzDeliLine = currentKatzDeliLine.slice(0, currentKatzDeliLine.length-2)
		}
	return ("The line is currently: " + currentKatzDeliLine);
	}
