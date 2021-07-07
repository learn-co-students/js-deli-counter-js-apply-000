
function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var current = line.shift()
    return `Currently serving ${current}.`
  }
}

function currentLine(line) {
  var array = []
  if (line.length == 0) {
    return "The line is currently empty."
  } else {
    var i = 0
    while (array.length < line.length) {
      array.push(`${i + 1}. ${line[i]}`)
      i++
    }
    return `The line is currently: ${array.join(", ")}`
  }
}
