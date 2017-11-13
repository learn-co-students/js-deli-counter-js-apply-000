var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  var output = "The line is currently: ";
  for (var i = 0; i < katzDeliLine.length; i++) {
    output += (i + 1) + ". " + katzDeliLine[i];
    if (i < katzDeliLine.length - 1) {
      output += ", ";
    }
  }
  return output;
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var output = "Currently serving " + katzDeliLine[0] + ".";
  katzDeliLine.shift();
  return output;
}
