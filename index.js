var takeANumber = function(currentLine, personName) {
  currentLine.push(personName);
  return "Welcome, " + personName + ". You are number " + (currentLine.indexOf(personName)+1) + " in line."
}

var nowServing = function(katzDeliLine) {
  if(katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    var person = katzDeliLine.shift();
    return "Currently serving " + person + ".";
  }
}

var currentLine = function(currentLine) {
  var beginningStr = "The line is currently:";
  if(currentLine.length == 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < currentLine.length; i++) {
      var modI = i + 1;
      if(i < currentLine.length - 1) {
      beginningStr = beginningStr + " " + modI + ". " + currentLine[i] + ",";
    } else {
      beginningStr = beginningStr + " " + modI + ". " + currentLine[i];
    }
    }
    return beginningStr;
  }
}
