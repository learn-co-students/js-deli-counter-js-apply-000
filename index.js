function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  var lineNumber = katzDeliLine.length
  return "Welcome, " + newPerson + ". You are number " + lineNumber + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var person = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + person + ".";
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    var line = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length - 1; i++){
      line = line + (i + 1) + ". " + katzDeliLine[i] + ", ";
    }
    line = line + katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length-1];
    return line;
  }
}

