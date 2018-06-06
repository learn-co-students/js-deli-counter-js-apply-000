function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var nextInLine = katzDeliLine.shift();
  return "Currently serving " + nextInLine + ".";
  }
}

function currentLine(katzDeliLine) {
  var numbersAndNames = [];
  var i = 0;
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  while (i < katzDeliLine.length) {
  numbersAndNames.push(" " + [i+1] + ". " + katzDeliLine[i])
  i++;
  }
  return "The line is currently:" + numbersAndNames;
}