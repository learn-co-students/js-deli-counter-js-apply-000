function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  var position = katzDeliLine.indexOf(newPerson) + 1;
  return "Welcome, " + newPerson + ". You are number " + position +" in line.";
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
  return "Currently serving " + katzDeliLine.shift() + ".";
}
}

function currentLine(katzDeliLine) {
  var peopleInLine = "";
if(katzDeliLine.length > 0) {
  for(var i=0; i < katzDeliLine.length; i++) {
    var num = katzDeliLine.indexOf(katzDeliLine[i]) + 1;
    if(num === katzDeliLine.length){
         peopleInLine += num + ". "+ katzDeliLine[i];
} else {
     peopleInLine += num + ". " + katzDeliLine[i] + ", ";
}
  }  return "The line is currently: " + peopleInLine;
} else {
     return "The line is currently empty.";
}
}
