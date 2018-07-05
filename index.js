function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  
  return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.";
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  var first = katzDeliLine[0];
  
  katzDeliLine = katzDeliLine.shift()
  
  return "Currently serving " + first + ".";
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  var line = "The line is currently: "
  
  for(var i = 0; i < katzDeliLine.length; i += 1) {
    var customer = katzDeliLine[i];
    
    if(i === katzDeliLine.length - 1) {
      line += (i + 1) + ". " + customer;
      break;
    }
    
    line += (i + 1) + ". " + customer + ", ";
  } 
  
  return line;
}