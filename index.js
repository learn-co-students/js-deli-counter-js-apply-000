var katzDeliLine = [];

function takeANumber(line, name) {
  return `Welcome, ${name}. You are number ${line.push(name)} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  var indexArray = []
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
   for (let i = 0; i < line.length; i++) {
    indexArray.push(`${i+1}. ${line[i]}`)
   }
    return `The line is currently: ${indexArray.join(', ')}`
  }
}
