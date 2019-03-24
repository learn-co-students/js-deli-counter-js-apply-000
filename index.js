function takeANumber(line, personName) {
  line.push(personName)
  return `Welcome, ${personName}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.` 
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var lineNames = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      lineNames.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${lineNames.join(", ")}`
  } 
}