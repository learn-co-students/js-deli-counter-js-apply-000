function takeANumber(cLine, name){
  cLine.push(name);
  return "Welcome, " + name + ". You are number " + cLine.length  + " in line.";
}


function nowServing(cLine){
  if (cLine.length < 1) {
    return "There is nobody waiting to be served!"
  }
  else {
  return "Currently serving " + cLine.shift() + "."
  }
  
   console.log(cLine);
}



function currentLine( cLine){
   if (cLine.length < 1) {
    return "The line is currently empty."
  }
  else{ 
    var i = 0;
    var newLine = "";
    for (i=0 ; i <cLine.length; i++) {
  newLine += i+1 + ". " + cLine[i] + ", ";
  }
return "The line is currently: " + newLine.substring(0,newLine.length-2); 
  }
  
}

