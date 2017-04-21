function takeANumber(katzDeliLine, newPerson) {
  var currentPosition = 1; //Start at 0 + 1
  katzDeliLine.push(newPerson);

  if (katzDeliLine.length === 1) {
    return "Welcome, " + newPerson + ". You are number " + currentPosition + " in line.";
  } else if (katzDeliLine.length > 1) {
  	currentPosition += katzDeliLine.indexOf(newPerson);
		return "Welcome, " + newPerson + ". You are number " + currentPosition + " in line.";
	}
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    var nextUp = katzDeliLine.shift();
    return "Currently serving " + nextUp + ".";
  }
}

function currentLine(katzDeliLine) {
  var line_string = "The line is currently:";
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
    	if (katzDeliLine[i] === katzDeliLine[katzDeliLine.length-1]) {
        var currentStr = " " + parseInt(i+1) + ". " + katzDeliLine[i];
        line_string += currentStr;
      } else {
    		var currentStr = " " + parseInt(i+1) + ". " + katzDeliLine[i] + ",";
      	line_string += currentStr;
      }
    }
  return line_string;
  }
}
