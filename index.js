function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name); // pushes the last person to the end of the line
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var nameAndPosition = []
    var arrayLength = line.length;
    for (var i = 0; i < arrayLength; i++) {
      nameAndPosition.push(`${i + 1}. ${line[i]}`)
    }
    return `The line is currently: ${nameAndPosition.join(', ')}`
  }
}