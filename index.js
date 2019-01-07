function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length.toString() + " in line.";
}

function nowServing(katzDeliLine){
  var personBeingServed;
  
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    personBeingServed = katzDeliLine.shift();
    return "Currently serving " + personBeingServed + ".";
  }
}

function currentLine(katzDeliLine) {
  var line = "The line is currently: ";
  
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    for(var i = 0; i < katzDeliLine.length; i++) {
      line += (i + 1).toString() + ". " + katzDeliLine[i];
      if(i !== katzDeliLine.length - 1) {
        line += ", ";
      }
    }
    
    return line;
  }
}