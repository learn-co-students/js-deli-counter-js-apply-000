
function takeANumber(katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName);
  return ("Welcome, " + newPersonName + ". You are number " + katzDeliLine.length + " in line.");
}
  
function nowServing(katzDeliLine) {
  var firstInLine;
  if (katzDeliLine.length === 0){
    return ("There is nobody waiting to be served!");
  } else {
    firstInLine = (katzDeliLine[0]);
    katzDeliLine.shift();
    return ("Currently serving " + firstInLine + ".");
  }
}
  
function currentLine(katzDeliLine) {
  var i;
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var lineList;
    for (i = 0; i < katzDeliLine.length; i++) {
      if (i === 0) {
        lineList = "The line is currently: " + (i+1) + ". " + (katzDeliLine[i]);
      } else {
        lineList = lineList + ", " + (i+1) + ". " + (katzDeliLine[i]);
      }
    }
    return lineList;
  }
} 