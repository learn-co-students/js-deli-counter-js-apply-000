var katzDeli = [];

function takeANumber(katzDeli, newCustomer) { //accept current line of people and new person. Returns position in line
	katzDeli[katzDeli.length] = newCustomer; //add new customer to katzDeli

	var newCustomerPosition = katzDeli.length; //create var with line position of new customer

	var response = "Welcome, " + `${newCustomer}` + ". You are number " + `${newCustomerPosition}` + " in line."; //create var stating line position as full snetence

	return response; 
}

function nowServing(katzDeli) { //accept line of people
	if (katzDeli.length === 0) { //empty line
		return "There is nobody waiting to be served!"; //return line is empty
	}

	else { //people on line
		var response = "Currently serving " + katzDeli[0] + "."; //create var stating name of first person in line
		katzDeli.splice(0,1); //remove first index in array
    return response; 
	}
}

function currentLine(katzDeli) { //accept line of people
	if (katzDeli.length === 0) { //empty line
		return "The line is currently empty."; //return line is empty
	}

	else {
		var people = [] //creat blank array

		for (var i = 0; i < katzDeli.length; i++) { //for loop to run through each person
			var linePosition = i + 1; //creat variable with line position
			var personInLine = " " + linePosition + ". " + katzDeli[i]; //create variable with line position and person
			people[people.length] = personInLine //add the numbered person to the array
		}

		var response = "The line is currently:" + people //create var with full sentence response
		return response
	}
}







