var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var positionInLine = katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + positionInLine +" in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else
    var nowPerson = katzDeliLine.shift();
    return "Currently serving " + nowPerson + "."
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0) {
    return "The line is currently empty.";
  }
  else {
    var namesInLine = [];
    for (var i = 0; i<katzDeliLine.length; i++) {
      namesInLine.push( i+1 + ". " + katzDeliLine[i]);
    }
    var namesLine = namesInLine.join(", ");
    return "The line is currently: " + namesLine;
  }
}
