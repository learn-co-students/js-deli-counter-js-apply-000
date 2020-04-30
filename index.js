
function takeANumber(currentPeople, newPerson){
  currentPeople.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + currentPeople.length + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0 ){
    return "There is nobody waiting to be served!"
  }else {
    var firstInLine = katzDeliLine.shift();
    return "Currently serving " + firstInLine + "."
  }
   
}

function currentLine(katzDeliLine){
  
  let line = [];
  let text = "The line is currently: ";
  
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }else{
  for(var i = 0; i < katzDeliLine.length; i++){
     line.push(i + 1 + ". " + katzDeliLine[i])  
    }
    return text + line.join(', ')
  }
}

