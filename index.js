var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return "Welcome, " + newName + ". You are number " + (katzDeliLine.length) + " in line."

}

function nowServing(katzDeliLine) {
  var shifted = katzDeliLine.shift();
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + shifted + ".";
  }
}

function currentLine(katzDeliLine) {
  var str = "";
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (i === 0) {
      str += "The line is currently: " + (i+1) + ". " + katzDeliLine[i] + ", ";
    } else if (i === katzDeliLine.length -1) {
      str += (i+1) + ". " + katzDeliLine[i];
    } else {
      str += (i+1) + ". " + katzDeliLine[i] + ", "
    }
  }
  return str;
}
