function takeANumber(katzDeliLine, name) {
  
  var position = katzDeliLine.length + 1;
  var string = "Welcome, " + name + ". You are number " + position + " in line.";
  katzDeliLine.push(name);
  return string;
}

function nowServing(katzDeliLine) {
  if (!Array.isArray(katzDeliLine) || !katzDeliLine.length) {
    return "There is nobody waiting to be served!";
  } 
  var name = katzDeliLine[0];
  katzDeliLine.shift(0);
  return "Currently serving " + name + ".";
  
}

function currentLine(katzDeliLine) {
  if (!Array.isArray(katzDeliLine) || !katzDeliLine.length) {
    return "The line is currently empty.";
  }
  var resultString = "The line is currently: "
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (i === katzDeliLine.length -1) {
    resultString += (i + 1) + ". " + katzDeliLine[i]; 
    break;
    }
    resultString += (i + 1) + ". " + katzDeliLine[i] + ", ";
    
  }
  return resultString;
  //return "The line is currently: 1. " + katzDeliLine[0] + ", 2. " + katzDeliLine[1] + 
  //", 3. " + katzDeliLine[2];
}