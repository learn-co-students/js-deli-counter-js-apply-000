
var katzDeli = []

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  var listNames = []
  for (var i = 0; i < line.length; i++) {
      listNames.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${listNames.join(', ')}`
}

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}
