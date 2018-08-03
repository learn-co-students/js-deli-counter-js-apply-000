function takeANumber(line, newCustomer) {
  line.push(newCustomer)
  var position = line.length
  return `Welcome, ${newCustomer}. You are number ${position} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var customer = line[0]
    line.shift()
    return `Currently serving ${customer}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var lineText = "The line is currently: "
    for (let i = 0; i < line.length; i++) {
      lineText += `${i + 1}. ${line[i]}`
      if (i < line.length - 1) {
        lineText += ", "
      }
    }
    return lineText
  }
}