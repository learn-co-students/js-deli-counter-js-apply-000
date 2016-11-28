var katzDeli = [];

function takeANumber(katzDeliLine) {
  katzDeliLine.push(katzDeliLine.length + 1);
  var position = katzDeliLine.length;
  return "Welcome. You are number " + position + " in line.";
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
  } // lineList = ["1. Bill", "2. Fred"]
  return "The line is currently: " + lineList.join(", ");
}
