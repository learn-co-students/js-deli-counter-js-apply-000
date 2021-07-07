var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line." }

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!" } 
   else { 
    return "Currently serving " + katzDeliLine.shift() + "."; }
  }
  
function currentLine (katzDeliLine) {
  var customerLine = [];
  if (katzDeliLine.length > 0) {
    for (var i=0; i<katzDeliLine.length; i++) {
      customerLine.push(" " + (i + 1) + ". " + katzDeliLine[i]);
    }
  return ("The line is currently:" + customerLine.slice(0, customerLine.length));
} else {
  return "The line is currently empty.";
}
}