var katzDeli = [];


function takeANumber(katzDeliLine, name) {
  var lineLength = katzDeliLine.length;
  katzDeliLine.push(name);
  var position = lineLength + 1
  var statement = "Welcome, " + name + ". You are number " + position + " in line."
  return statement;
}

function nowServing (katzDeliLine) {
  var lineLength = katzDeliLine.length;
  if (lineLength == 0) {
    var statement = "There is nobody waiting to be served!"
    return statement;
  }
  if (lineLength > 0) {
    var i = 0;
    var serving = katzDeliLine[i];
    var statement = "Currently serving " + serving + "."
    katzDeliLine.shift();
    return statement;
  }

}

function currentLine (katzDeliLine) {
  var lineLength = katzDeliLine.length;
  if (lineLength == 0) {
    var statement = "The line is currently empty."
    return statement;
  }
  if (lineLength > 0) {
    var lineA = [];
    var name = [];
    var position = 0;
    for (var i = 0; i < lineLength; i++) {
        name = katzDeliLine[i];
        position = i + 1;
        lineA[i] = " " + position + ". " + name + "";
      }
  }

  var statement = "The line is currently:" + lineA
  return statement;
}
