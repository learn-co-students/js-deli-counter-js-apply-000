var katzDeli = [];
var name;
function takeANumber(katzDeliLine, name) {
  var i = katzDeliLine.length; 
  katzDeliLine[i] = name;
  var count = i + 1;
  var queue = "Welcome, " + name + ". You are number " + count + " in line."
  return queue;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    var person = "Currently serving " + katzDeliLine[0] +".";
    katzDeliLine.splice(0,1);
    return person
    }
  }
var i = 0;
var waiting = "The line is currently: ";
  function currentLine(katzDeli) {
if (katzDeli.length === 0){
  return "The line is currently empty."
}
else {
  for (i=0; i < katzDeli.length; i++){
    var x = i +1;
    waiting = waiting + x + ". " + katzDeli[i] + ", ";
  }
  waiting = waiting.slice(0, -2);
  return waiting
  }
}