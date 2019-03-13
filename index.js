function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!"
  }
  
  return "Currently serving " + katzDeliLine.shift() + "."
}
 
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
      return "The line is currently empty."
  }
  
  var names = "";
  
  for(var i = 0; i < katzDeliLine.length; i++) {
    names = names + (i + 1) + ". " + katzDeliLine[i]
    
    if (i != katzDeliLine.length - 1) {
      names = names + ", "
    }
  }
  
  return "The line is currently: " + names;
}
