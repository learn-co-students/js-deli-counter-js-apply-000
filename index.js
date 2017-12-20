
var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let number = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + number + " in line.";
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length !== 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } 
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
 if(katzDeliLine.length === 0) {
   return "The line is currently empty.";
 } 
 
 var current = [];
 
 for (let i = 0, l = katzDeliLine.length; i < l; i++) {
   current.push(i + 1 + ". " + katzDeliLine[i])
 }
 return "The line is currently: " + current.join(', ');
}


