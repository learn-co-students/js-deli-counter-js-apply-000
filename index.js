var katzDeli = [];

function takeANumber(katzDeliLine,newPersonName){
  katzDeliLine.push(newPersonName);
  return "Welcome, " + newPersonName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
  //return "Currently serving " + katzDeliLine[0] + "."
  return "Currently serving " + katzDeliLine.shift() + "."
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  var theLine = []
  if (katzDeliLine.length > 0){
  for (var i = 0; i < katzDeliLine.length; i++){
    theLine.push(i+1 + ". " + katzDeliLine[i])
  }
  theLine = ("The line is currently: " + theLine.join(', '))
  }else{
    theLine = "The line is currently empty."
  }
  return theLine
}