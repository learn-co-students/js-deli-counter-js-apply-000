var katzDeli = [];
function takeANumber (katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  var linePosition = katzDeliLine.indexOf(newPerson) + 1;
  var greeting = "Welcome, " + newPerson + ". You are number " + linePosition + " in line."
  return greeting;
}

function nowServing (katzDeliLine){
  var nextInLine = katzDeliLine.shift();
  if (katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  }
  else return "Currently serving " + nextInLine + ".";
}

function currentLine (katzDeliLine){
  if (katzDeliLine.length < 1){
    return "The line is currently empty."
  }
  else
    var readTheLine = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++){
      var position = i + 1;
      if (i != katzDeliLine.length - 1){
      readTheLine += position + ". " + katzDeliLine[i] + ", "}
      else {
        readTheLine += position + ". " + katzDeliLine[i];}
      }
      return readTheLine;
}
