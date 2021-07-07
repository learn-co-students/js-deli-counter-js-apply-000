function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    let name = line[0]
    line.shift();
    return `Currently serving ${name}.`
  }
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty."
  } else {
    let result = line.map((e, i) => {
      return `${i + 1}. ${e}`
    })
    return `The line is currently: ${result.join(', ')}`
  }
}
