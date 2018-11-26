function takeANumber(currentLine, personName){
  currentLine.push(personName);
  return "Welcome, " + personName + ". You are number " + currentLine.length +  " in line." ;
}
  
function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  
  return "Currently serving " + katzDeliLine.shift() + ".";
}

function currentLine(katzDeliLine){
 let katzDeliLineFinal = [];
  if(katzDeliLine.length === 0){
     return "The line is currently empty.";
  }
  for(let i = 0; i < katzDeliLine.length; i++){
    katzDeliLineFinal.push(i + 1 +  ". " + katzDeliLine[i]);
  } 
    
    return "The line is currently: " +  katzDeliLineFinal.join(", ");
}