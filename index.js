function takeANumber(deliLine, newName) {
  
  return "Welcome, "+ newName+". You are number "+ (deliLine.push(newName)) + " in line.";
  
}

function nowServing(deliLine) {
  if (deliLine.length<1) {
    return "There is nobody waiting to be served!";
  }
  else {return "Currently serving "+deliLine.shift()+"."}
} 



function currentLine(deliLine) {
  var serving;
  
  if (deliLine.length <1) {
    serving = "The line is currently empty.";
  }
  else {
    
    serving = "The line is currently: ";
  for (var person in deliLine) {
    var spot = parseInt(person)+1;
    serving += spot+". "+deliLine[person];
    
    if (person < deliLine.length - 1) {
      serving+= ", ";
    }
    
}
}
return serving; 
  
}
