
var katzDeliLine = [];

function takeANumber (katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return "Welcome, "  + newPerson + ". " + "You are number " + katzDeliLine.length + " in line."
}


function nowServing(katzDeliLine) {
  var nextPerson = katzDeliLine[0];
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    katzDeliLine = katzDeliLine.splice(0,1);
    return "Currently serving " + nextPerson + ".";
  }
}


function currentLine(katzDeliLine) {
var line = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  for (var i = 0; i < katzDeliLine.length; i++) {
    line.push(" " + (i+1) + ". " + katzDeliLine[i] );
  }
  return "The line is currently:" + line;
}
