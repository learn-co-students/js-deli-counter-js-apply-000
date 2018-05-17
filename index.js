var katzDeliLine = [];

function takeANumber (katzDeliLine, customerName){
katzDeliLine.push(customerName);
return "Welcome, " + customerName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing (katzDeliLine){
  
    let currentPerson;
    if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!";
    }
    currentPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + currentPerson + ".";
}

function currentLine(katzDeliLine){
  
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  
  let outputString = "The line is currently: ";

  for (let i=0; i<katzDeliLine.length; i++){
    outputString += `${i + 1}. ${katzDeliLine[i]}`;
    if(i != katzDeliLine.length - 1){
       outputString += ", ";
    }
  }
  
  
  return outputString;
    
}