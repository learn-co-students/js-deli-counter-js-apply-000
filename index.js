
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name +". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var current = katzDeliLine.shift();
    return "Currently serving " + current +".";
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  var currentLineStr = "The line is currently: ";
  if (katzDeliLine.length == 0){
    return "The line is currently empty.";
  }
  else {
    for(var i=0; i<katzDeliLine.length; i++){
      currentLineStr += (i+1).toString() +". " + katzDeliLine[i] + ", ";
    }
    return currentLineStr.substring(0, currentLineStr.length-2);
  }
}
