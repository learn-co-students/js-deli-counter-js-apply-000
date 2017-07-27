function takeANumber(katzDeliLine, newName) {
  // don't return an index, increment by 1
  var position = katzDeliLine.length + 1;

  // add customer to the line
  katzDeliLine.push(newName);

  // return their position in line
  var linePosition = "Welcome, " + newName + ". You are number " + position + " in line."

  return linePosition;
}

function nowServing(katzDeliLine) {
  // if there is nobody in line
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  // return the first person in line
  // and remove that individual from the line
  else {
    var currentCustomer = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
    return currentCustomer;
  }
}

function currentLine(katzDeliLine) {
  // returns the current line

  // if there is nobody in line,
  // return "The line is currently empty."
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  // ex. if katzDeliLine = ["Ada", "Grace"]
  // return "The line is currently: 1. Ada, 2. Grace"
  else {
    var currentList = "The line is currently: "

    // all except the last person in line
    for (var i = 0; i < katzDeliLine.length - 1; i++) {
      currentList += (i + 1) + ". " + katzDeliLine[i] + ", ";
    }
    // the last person in line
    currentList += katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length - 1];

    return currentList;
  }
}
