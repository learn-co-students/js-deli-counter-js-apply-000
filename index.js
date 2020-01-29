var katzDeliLine = [];

//function takeANumber adds names to the katzDeliLine list

function takeANumber(inLine, nextInLine) {


	inLine.push(nextInLine);

	var welcome = "Welcome, " + nextInLine + ". You are number " + inLine.length + " in line.";

	console.log(welcome);
	return welcome;
}

//function nowServing(inLine)

function nowServing(inLine) {

		// Check for katzDeliLine for empty array
	if (inLine.length == 0) {

		var message = "There is nobody waiting to be served!";
		return message;


	}
	else {

			// Use "shift" to permanently delete array[0] entry
			// Delete inline[0] from katzDeliLine
		var current = inLine.shift();

		var message = "Currently serving " + current + ".";

		return message;

	}

}

nowServing(katzDeliLine);

//function currentLine(inLine)


function currentLine(inLine) {

	if (inLine.length == 0) {
		var message = "The line is currently empty.";
		return message;
	}

	var listIntro = "The line is currently:";
	var listOrder = [];

	for (var i = 0; i < inLine.length; i++) {

		var iList = " " + (i + 1) + ". " + inLine[i];
		listOrder.push(iList);
	}

	return (listIntro + listOrder);
}

currentLine(katzDeliLine);
