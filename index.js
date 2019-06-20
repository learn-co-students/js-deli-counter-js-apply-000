// args: array of strings (current line of people), string (new person’s name)
// return: string (welcome message)

const katzDeliLine = [];

function takeANumber (katzDeliLine, newName) {
 katzDeliLine.push(newName);
 return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeliLine.shift()}.`);
}

function currentLine(katzDeliLine, newName){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  else {
	var line = 'The line is currently: '; 
	// initialize a string with the static text
	for (var i = 0; i < katzDeliLine.length; i++) {
		line = line + [i+1] + '. ' + katzDeliLine[i]; 
		// each time you loop through, add the number and persons name
		// if this is not the last person in the loop, add a comma and space before the next name
		if (i != katzDeliLine.length - 1) {
			line = line + ', '
		}
	}
	return (line);
}}

