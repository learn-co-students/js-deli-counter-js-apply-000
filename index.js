
function takeANumber (katzDeliLine, next) {
  katzDeliLine.push(next);
  return "Welcome, " + next + ". You are number " 
  + katzDeliLine.length +  " in line."
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

var lineOrder = [];

function currentLine (katzDeliLine) {
   if (katzDeliLine.length === 0) {
    return "The line is currently empty."
   } else {
     for (var i = 0; i < katzDeliLine.length; i++) {
    lineOrder.push(` ` + [i + 1] + ". " + katzDeliLine[i])
  }
  return "The line is currently:" + lineOrder;} 
  
}



