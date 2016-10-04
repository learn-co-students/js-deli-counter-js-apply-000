var katzDeliLine = [];
function takeANumber(katzDeliLine, newCust){
  katzDeliLine.push(newCust);
  return ("Welcome, " + newCust + ". You are number " +
  (katzDeliLine.indexOf(newCust) + 1) + " in line.");
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
  else{
    return "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
  }
}
function currentLine(katzDeliLine){
  var lineString = "The line is currently: ";
  var counter = 1;
  if (katzDeliLine.length == 0){
    return "The line is currently empty."
  }
  else{
    for (var i=0;i<katzDeliLine.length;i++){
      if (i < katzDeliLine.length - 1){
        lineString = lineString + counter + ". " + katzDeliLine[i] + ", ";
        counter++;
      }
      else{
        lineString = lineString + counter + ". " + katzDeliLine[i] ;
        counter++;
      }

    }
    return lineString;
  }

}
