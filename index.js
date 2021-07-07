function takeANumber(katzDeliLine, newName) {
	katzDeliLine.push(newName);
	var welcomeMessage = "Welcome, " + newName + ". You are number " + katzDeliLine.length + " in line.";
	return welcomeMessage;
}

function nowServing(katzDeliLine) {
	var firstInLine = katzDeliLine[0];
	var currentlyServing = "Currently serving " + firstInLine + ".";
	var emptyLineMessage = "There is nobody waiting to be served!";
	if(katzDeliLine[0] === undefined) {
		return emptyLineMessage;
	} else {
		katzDeliLine.shift(katzDeliLine[0]);
		return currentlyServing;
	}
}

function currentLine(katzDeliLine) {
	var list = [];
	for(var i = 0; i < katzDeliLine.length; i++) {
		var currentListItem = " " + (i + 1) + ". " + katzDeliLine[i];
		list.push(currentListItem);
	}
	var currentLineMessage = "The line is currently:" + list;
	var emptyLineMessage = "The line is currently empty.";
	if(katzDeliLine[0] === undefined) {
		return emptyLineMessage;
	} else {
		return currentLineMessage;
	}
}
