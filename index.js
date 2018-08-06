function takeANumber(katzDeliLine, name) {
  katzDeliLine.push (name)
  return ( "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!";}
  else {
    return ("Currently serving " + katzDeliLine.shift() + "."); 
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  var message = "The line is currently: ";
  var counter = 0;
  while (counter<katzDeliLine.length) { 
    message = message + (counter+1) + ". " + katzDeliLine[counter] + ", ";
    counter = counter + 1;
  }
  message = message.slice(0, -2);
  return message;
}
