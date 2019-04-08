
var katzDeliLine = [];

function takeANumber (katzDeliLine, name) {
  var num  = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return "Welcome, " + name + "." + " You are number "  + num + " in line."
}

function nowServing (katzDeliLine) {
  
  
  if (katzDeliLine.length === 0 || katzDeliLine === undefined) {
    return "There is nobody waiting to be served!"
    
  } else {
    return "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.shift()  
  }
  
}

function currentLine(katzDeliLine) {
  
    if (katzDeliLine.length === 0 || katzDeliLine === undefined) {
    return "The line is currently empty."
    
  } else {
    
    for (i = 0; i < katzDeliLine.length; i++) {
    return "The line is currently: " + num[i] + ". " + katzDeliLine[i]
    }
  }
  
}