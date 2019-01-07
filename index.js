var katzDeliLine = [];
function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return "Welcome, " + newName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var returnString = 'The line is currently: ';
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i > 0 && i < katzDeliLine.length) {
        returnString += ', ';
      }
      returnString += (i+1) + ". " + katzDeliLine[i];
    }
    return returnString;    
  } else { 
    return 'The line is currently empty.';
  }

}