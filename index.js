var katzDeliLine = [];
 
function takeANumber(katzDeliLine, person) {
katzDeliLine.push(person) 
const number = katzDeliLine.length
  return "Welcome, " + person + ". You are number " + number + " in line."
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstName = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + firstName + "."
  } 
  else {
    return "There is nobody waiting to be served!"
  }
  
}

function currentLine (katzDeliLine) {
if (katzDeliLine.length > 0) {
var out = "The line is currently: "
 for (var i = 0; i < katzDeliLine.length; i++) {
   out = out + (i + 1 + ". " + katzDeliLine[i]) + ", " }
    var n = out.lastIndexOf(",");
    var final = out.substring(0,n) 
   return final
}
  else {
    return "The line is currently empty."
  }
  
}

