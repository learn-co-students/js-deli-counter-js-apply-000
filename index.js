var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
   katzDeliLine.push(newName)
   return "Welcome, " + katzDeliLine[katzDeliLine.length - 1] + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  var serving = "Currently serving " + katzDeliLine[0] + ".";
  if (katzDeliLine.length > 0) {
    katzDeliLine.shift();
    return serving;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var currentLine = "The line is currently: ";
  if (katzDeliLine.length > 0) {
    for (let i = 0; i < katzDeliLine.length; i++) {
      let currentCustomer = katzDeliLine[i];
    if (i < katzDeliLine.length - 1) {
    currentLine = currentLine + (i + 1) + ". " + currentCustomer + ", ";
    }
    if (i === katzDeliLine.length - 1) {
      currentLine = currentLine +(i + 1) + ". " + currentCustomer;
      }
    }
  } else {
    return "The line is currently empty."
  }
  return currentLine;
}