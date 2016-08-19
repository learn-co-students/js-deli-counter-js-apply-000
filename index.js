var theDeli = [];

function takeANumber(theDeli, newPerson){
	theDeli.push(newPerson);
	return "Welcome, " + newPerson + ". " + "You are number " + (theDeli.indexOf(newPerson) + 1) + " in line." ;
}

function nowServing(theDeli){

	if (theDeli.length === 0){
		return "There is nobody waiting to be served!";
	}

	var currentPerson = theDeli.shift();
	return "Currently serving " + currentPerson + ".";
}

function currentLine(theDeli){
	if (theDeli.length === 0){
		return "The line is currently empty.";
	}
}

function currentLine(theDeli){
	if (theDeli.length === 0){
		return "The line is currently empty.";
	}

	var theLine = "";

	for (var i = 0; i < theDeli.length; i++){
		var currentPerson = theDeli[i];
		theLine += " " + (i + 1) + ". " + currentPerson;

		if (i < theDeli.length - 1){
			theLine += ",";
		}
	}

	return "The line is currently:" + theLine;
}
