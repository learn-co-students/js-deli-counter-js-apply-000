var katzDeli = [];


function currentLine(katzDeli) {
  if(katzDeli.length === 0) {
    return "The line is currently empty."
  }
  
  var newLine = "The line is currently: ${katzDeli[0}}"
  
  for(let i = 1; i < katzDeli.length; i++) {
    newLine += ${i+1}. ${katzDeli[i]}
  }

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
}
function nowServing(x) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = x[0];
    x.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}
