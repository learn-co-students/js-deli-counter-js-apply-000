
var newCustName;

function takeANumber(katzDeliLine, newCustName) {
katzDeliLine.push(newCustName);
return "Welcome, " + newCustName + "." + " You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
 if (katzDeliLine[0]) {
  return "Currently serving " + katzDeliLine.shift() + "."
 } else {
    return "There is nobody waiting to be served!"
 }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    for (var i = 1; i-1 < katzDeliLine.length; i++) {
      return "The line is currently: " 
      + "1. " + katzDeliLine.slice(0,1) + ", "
      + "2. " + katzDeliLine.slice(1,2) + ", "
      + "3. " + katzDeliLine.slice(2,3)
   }
  } else {
        return "The line is currently empty."
  }
}