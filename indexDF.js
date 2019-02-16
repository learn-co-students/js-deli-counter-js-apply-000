function takeANumber(currentLine, newCustomer){
  currentLine.push(newCustomer);
  
  var i = currentLine.length;
  
  return "Welcome, " + newCustomer + ". You are number " + i + " in line.";
}


function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }else {
    return "The line is currently: 1. " + katzDeliLine[0] + ", 2. " + katzDeliLine[1] + ", 3. " + katzDeliLine[2];
}
}