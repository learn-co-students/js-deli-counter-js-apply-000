var katzDeliLine = []
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) +1 } in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var current = katzDeliLine.shift()
  return `Currently serving ${current}.`
  
    
  } else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`
  }
}