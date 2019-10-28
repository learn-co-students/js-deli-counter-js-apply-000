function takeANumber(katzDeliLine, newCustomer) {
  if (katzDeliLine.length > 0);
  katzDeliLine.push(newCustomer);
  return "Welcome, " + newCustomer + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length===0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var nextCustomer = katzDeliLine.shift();
    return "Currently serving " + nextCustomer + ".";
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length===0) {
    return "The line is currently empty."
  }
  else {
    var lineOrder = [];
    for(var i=0; i<katzDeliLine.length; i++) {
    lineOrder.push((i + 1) + ". " + katzDeliLine[i])
    }
  }
  return "The line is currently: " + lineOrder.join(', ');
}
  