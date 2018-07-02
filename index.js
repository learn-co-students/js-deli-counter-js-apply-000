// var katzDeli = [];
  
function takeANumber(katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName);
  return "Welcome, " + newPersonName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
       return ("Currently serving " + katzDeliLine.shift() + ".");
  } else if(window.katzDeliLine === undefined) {
    return ("There is nobody waiting to be served!");
  }
}

function currentLine(katzDeliLine) {
  var orderInLine = [];
  
  if (katzDeliLine.length === 0) {
   return "The line is currently empty." ;
 }
  
  for (var i = 0; i < katzDeliLine.length; i ++) {
    var name = katzDeliLine[i];
   orderInLine.push(' ' + (i + 1) + '. ' + name);
  } 
  return "The line is currently:" + orderInLine;
}
