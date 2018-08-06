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

function currentLineWhile(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  var message = "The line is currently: ";
  var counter = 0;
  while (counter<katzDeliLine.length) { 
    message += (counter+1) + ". " + katzDeliLine[counter] + ", ";
    counter ++;
  }
  message = message.slice(0, -2);
  return message;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  var message = "The line is currently: ";
  
  for (var counter = 0; counter<katzDeliLine.length;counter ++) { 
    message += (counter+1) + ". " + katzDeliLine[counter] + ", ";
    
  }
  message = message.slice(0, -2);
  return message;
}


