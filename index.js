var katzDeli =[];
var katzDeliLine = ["Anthony", "Justin", "Enoch"];
function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
   return "Welcome, " + newName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length !== 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty."
  } 
 
  var lineAndNumber = [];
  
  for(var i =0; i < line.length; i++) {
    lineAndNumber.push(i+1 + ". " + line[i]);
  }
  return "The line is currently: " + lineAndNumber.join(", ");
}