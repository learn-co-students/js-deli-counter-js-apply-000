var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome," + (name) + "You are number" + (katzDeliLine) + "in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!";
  }
  if (katzDeliLine > 0) {
  return "Now serving" + katzDeliLine.push(name);
  }
  else
  "Currently serving" + katzDeliLine.push(name); ".";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  for (var i = 0; i < katzDeliLine.length; i++)
    katzDeliLine.push(i + 1 + ". " +katzDeliLine);
  return "The line is currently:" + push(name);
  }