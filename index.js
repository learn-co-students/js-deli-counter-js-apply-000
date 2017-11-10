var katzDeliLine = [];
var position = 0;

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.");
}



function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var served = katzDeliLine.shift();
    return "Currently serving " + served + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var output = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      output += (i + 1) + ". " + katzDeliLine[i] + ", ";
    }
  }
  return output.slice(0, output.length - 2);
}
