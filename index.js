function takeANumber(currentLine, newPerson) {
  var newLine;
  newLine = currentLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing(deliLine) {
  var newDeliLine;
  newDeliLine = deliLine.shift()

  if (deliLine.length === 0) return `There is nobody waiting to be served!`
  else return `Currently serving ${newDeliLine}.`
}

function currentLine(line) {
  let personsInLine = []
  if (line.length === 0) return `The line is currently empty.`
  else {
    for (var i = 0; i < line.length; i++) {
      personsInLine.push(` ${i + 1}. ${line[i]}`)
    }
  return `The line is currently:${personsInLine}`

  }
}
