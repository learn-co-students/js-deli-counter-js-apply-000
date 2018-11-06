function takeANumber(curr, name){
  curr.push(name);
  return "Welcome, " + name + ". You are number " + curr.length + " in line.";
}

function nowServing(curr){
  if(curr.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    currPerson = curr.shift();
    return "Currently serving " + currPerson + " .";
  }
}

function currentLine(curr){
  currLine = "The line is currently: ";
  if(curr.length === 0){
    return "The line is currently empty.";
  }
  else {
   for (var i = 0; i < curr.length; i++){
     currLine += (i+1);
     currLine += ". ";
     currLine += curr[i];
     if (i !== (curr.length-1)){
       currLine += ", ";
     }
   }
   return currLine;
  }
}