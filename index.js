function takeANumber(line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.indexOf(person) + 1} in line.`
}

function nowServing(line) {
  if (line[0]) {
    var customer = line.shift()
    return `Currently serving ${customer}.`
    
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deliLine) {
  if (deliLine.length > 0) {
    var i = 0
    var line = []
    while (i < deliLine.length) {
      line.push(`${i + 1}. ${deliLine[i]}`)
      i++
    }
    return `The line is currently: ${line.join(', ')}`
  }
  else {
    return "The line is currently empty."
  }
}