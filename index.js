function takeANumber(currentLineOfPeople, newPerson){
  currentLineOfPeople.push(newPerson);
  
  return "Welcome, " + newPerson + ". " + "You are number " + currentLineOfPeople.length + " in line.";
}

function nowServing(katzDeliLine){
    if(katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!"
  } 
    else {
      return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(currentLineOfPeople){
  if (currentLineOfPeople.length === 0){
    return "The line is currently empty.";
  }
  
  var arrayOfNamesAndNumber = [];
  
    for(var i=0; i<currentLineOfPeople.length; i++) {
    arrayOfNamesAndNumber.push(i+1 + ". "+ currentLineOfPeople[i]);
  }
  
  return "The line is currently: " + arrayOfNamesAndNumber.join(', ');
}