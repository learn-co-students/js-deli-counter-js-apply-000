var katzDeliLine = [];

function takeANumber(currentLine, name){
var placeInLine = currentLine.length + 1;
var outputString = "Welcome, "+ name + ". You are number " + placeInLine + " in line."
currentLine.push(name);
return outputString;
}

function nowServing(currentLine){
  var outputString;
  if(currentLine.length === 0){
    outputString = "There is nobody waiting to be served!"
  }
  else{
    outputString = "Currently serving " + currentLine[0] + "."
    currentLine.shift();
  }
  return outputString;
}

function currentLine(line){
  var outputString;
  if(line.length === 0){
    outputString = "The Line is currently empty."
  }
  else{
    outputString = "The line is currently: "
    for(var i = 0; i<line.length ; i++){
      if (i === 0){
        
        
  outputString = outputString + (i+1) + “. ” + line[i];
}


else{
outputString = outputString + “, ” + (i+1) + “. ” + line[i];
}
}
}
return outputString;
}

