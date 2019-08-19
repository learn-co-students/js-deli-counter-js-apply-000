function takeANumber(deliLine, newCustomer){
  
  var i;
  deliLine[deliLine.length] = newCustomer;
  var linePosition = deliLine.length;
  
  return "Welcome, " + newCustomer + ". You are number " + linePosition + " in line.";
}

function nowServing(deliLine){
  
   if (deliLine.length > 0){
     var deliName = deliLine[0];
     deliLine.shift();
     return "Currently serving " + deliName + ".";
  }
  
  else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(deliLine){
  var commaLength = deliLine.length;
  
  if (commaLength === 0){
    return "The line is currently empty.";
  }
  
  else{
    var outputLine = "The line is currently: ";
    for(var i = 0; i < commaLength; i++){
      outputLine = outputLine + (i + 1) + ". " + deliLine[i]; 
      if (i < commaLength - 1){
        outputLine = outputLine + ", ";
      }
   }
   return outputLine;
  }
}