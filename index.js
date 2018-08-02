function takeANumber(line, name) {
	var linePosition = 0;
	line.push(name);
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
	var retString = "";
  if (line.length === 0) {
      retString = "The line is currently empty."
  }
  else {
    var fullString = "";
    for (var i=0; i<line.length; i++) {
      var person = line[i];
      var position = i+1 ;
      var miniString = position + ". " + person;
      if (position === line.length) {
        fullString = fullString + miniString;
        }
        else {
          fullString = fullString + miniString + ", ";
        }
    }
    retString = "The line is currently: " + fullString
  }
  return retString
}
