var katzDeliLine = ["Ada", "Grace", "Kent"];

function takeANumber(line, name) {
	var linePosition = 0;
	line.push(name); // adding the name into the array

	linePosition = line.indexOf(name) + 1;

	var retString = "Welcome, " + name + ". You are number " + linePosition + " in line.";

	return retString;
}

function nowServing(line) {
	var person = "";
	var retString = "";

	if (line.length > 0) {
		person = line.shift();
		retString = "Currently serving " + person + ".";
	}
	else {
		retString = "There is nobody waiting to be served!"
	}
	return retString;
}

function currentLine(line) {
	var lineup = "";
	var retString = "";

    if (line.length === 0) {
    	retString = "The line is currently empty.";
    }
    else {
    	var peopleInLine = "";
    	// split the final string in half:
    		// 1st half="The line is currently:"
    		// 2nd half: "1. Ada, 2. Grace"
		for (var i=0; i<line.length; i++) {
		// loop through the line, stop when i is equal to the length of the line
			var numberInLine = i + 1; // this is the "1." or the "2."
			var person = "";
			person = numberInLine + ". " + line[i]; // this looks like "1. Ada," or "2. Grace"
			if (i+1 !== line.length) {
				person = person + ", "; // only add the comma after if it isn't the last person
			}
			peopleInLine = peopleInLine + person;
		}
		retString = "The line is currently: " + peopleInLine; // build the 2nd half of the final string
	}
  return retString;
}
