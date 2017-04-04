var katzDeli = [];
function takeANumber(katzDeliLine, personName){
  katzDeliLine.push(personName);
  return "Welcome, " + personName + ". You are number " + (katzDeliLine.indexOf(personName)*1 + 1) + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine[0]){
    return "Currently serving " + katzDeliLine.shift() +".";
  } else {
    if (!katzDeliLine[0]){
      return "There is nobody waiting to be served!";
    }
  }
}

function currentLine(katzDeliLine){
  var theLine = "The line is currently: "
  var katzDeliLine2 = "";
  if(!katzDeliLine[0]){
    return "The line is currently empty."
  } else {
    katzDeliLine2 =  "1. " + katzDeliLine[0]
    for (var i =1; i<= katzDeliLine.length -1; i++){
    katzDeliLine[i] = ([i]*1 + 1).toString() + ". " + katzDeliLine[i];
    katzDeliLine2 = katzDeliLine2 + ", " + katzDeliLine[i];
    }
  return theLine  + katzDeliLine2;
  }
}
