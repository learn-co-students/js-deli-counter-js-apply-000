function takeANumber(line, name) {
  line.push(name)
    return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if(!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }
  const peopleInLine = []
    for (let i = 0, p = line.length; i < p; i++) {
      peopleInLine.push(`${i + 1}. ${line[i]}`)
    }
    return `The line is currently: ${peopleInLine.join(', ')}`
}
