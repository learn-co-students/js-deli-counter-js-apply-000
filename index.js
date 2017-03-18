var katzDeli = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push (name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing (deliLine) {
  var customer = deliLine[0]
  if (deliLine.length > 0) {
    deliLine.splice(0, 1)
    return ("Currently serving " + customer + ".")
  }
  else {
    return "There is nobody waiting to be served!"
  }
  }

function currentLine (katzDeliLine){
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  else {
    var tempString = "The line is currently: ";
    for (var i = 1; i < katzDeliLine.length; i++) {
      tempString = tempString + i + ". " + katzDeliLine[i-1] + ", ";
    }
    tempString = tempString + katzDeliLine.length + ". " + katzDeliLine [(katzDeliLine.length-1)]
    return tempString;
  }
  }
