var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var position = katzDeliLine.indexOf(newName) + 1;
  return "Welcome, " + newName + ". You are number " + position + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  }
  if (katzDeliLine.length >= 1) {
    var customer = katzDeliLine[0];
    katzDeliLine.shift();
    return ("Currently serving " + customer + ".");
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  }
  var lineList = [];
  var i = 0;
  while (i < katzDeliLine.length) {
    var customer = katzDeliLine[i];
    var position = i+1;
    lineList.push(position + ". " + customer);
    i++;
  }
  return "The line is currently: " + lineList[0] + ", " + lineList[1] + ", " + lineList[2];
}
