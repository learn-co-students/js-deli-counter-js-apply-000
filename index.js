function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var name = katzDeliLine.shift()
  return "Currently serving number " + name + ".";
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  var message = "The line is currently: ";

  for (var i = 0; i < katzDeliLine.length; i++) {
    message += (i+1) + ". " + katzDeliLine[i];
    message += (i < katzDeliLine.length -1) ? ", " : "";
  }

  return message;
}
