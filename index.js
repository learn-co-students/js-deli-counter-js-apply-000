

function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer);
  let greeting = "Welcome, " + newCustomer + ". You are number " + katzDeliLine.length + " in line.";
  return greeting;
}

takeANumber();

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
    
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

nowServing();

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  
  var nameNum = [];
  
  for (let i = 0; i < katzDeliLine.length; i++) {
    nameNum.push(i + 1 + ". " + katzDeliLine[i]);
  }
  
  return "The line is currently: " + nameNum.join(', ');
  
}

currentLine();