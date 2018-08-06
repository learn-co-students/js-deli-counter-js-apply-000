var maxDeliLine = [];

function takeANumber(maxDeliLine, newName){
  var linePos;
  var welcomeMessage;
  maxDeliLine.push(newName)
  linePos = maxDeliLine.length;
  welcomeMessage = "Welcome, " + newName + ". You are number " + linePos + " in line.";
  return welcomeMessage
}  
  /*
  for(var i = 0; i < currentLine.length; i++){
    if(currentLine[i] == newName){
      linePos = i + 1;
    }
  }*/


function nowServing(maxDeliLine){
  if(maxDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  var firstPos = maxDeliLine.shift();
  return "Currently serving " + firstPos + ".";
}

function currentLine(maxDeliLine){
  var lineString = "The line is currently: ";
  if(maxDeliLine.length === 0){
    return "The line is currently empty."
  }
  else{
    for(var i = 0; i < maxDeliLine.length; i++){
      lineString = lineString + (i+1) + ". " + maxDeliLine[i];
      if(i < maxDeliLine.length - 1){
        lineString = lineString + ", ";
      }
    }
    return lineString;
  }
}