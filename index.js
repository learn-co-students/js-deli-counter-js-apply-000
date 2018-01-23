
var katzDeli = [];


function takeANumber(katzDeliLine, newPerson) {
var position = katzDeliLine.length + 1
katzDeliLine.push(newPerson)
return `Welcome, ${newPerson}. You are number ${position} in line.`
}


function nowServing(katzDeliLine) {

   if (katzDeliLine.length === 0) {
    return  "There is nobody waiting to be served!"
  }

  else if (katzDeliLine.length > 0) {
  var personServed = katzDeliLine.shift()
  return `Currently serving ${personServed}.`
  }

}

function currentLine(katzDeliLine) {
var lineUp= []
if (katzDeliLine.length === 0) {
  return "The line is currently empty."
}

else {
for (var i = 0; i < katzDeliLine.length; i++) {
  lineUp.push(` ${(i+1)}. ${katzDeliLine[i]}`)
}
lineUp.join("")
  return `The line is currently:${lineUp}`
  }

}