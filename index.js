var katzDeli = [];

function takeANumber(katzDeliLine,newPerson) {
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var nextPerson = katzDeliLine.shift()
    return `Currently serving ${nextPerson}.`
  }
}

function currentLine(katzDeliLine) {
  var output = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  for (let i = 0; i < katzDeliLine.length; i++) {
    output += (i + 1) + ". " + katzDeliLine[i] + ", "
  }
  var finalOutput = output.slice(0,-2)
  
  return "The line is currently: " + finalOutput
}