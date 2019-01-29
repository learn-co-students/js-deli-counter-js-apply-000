function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(line) {
  var newArray = []
  if (!line.length) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < line.length; i++) {
      newArray.push(`${i + 1}. ${line[i]}`)
    }
    return "The line is currently: " + newArray.join(", ")
  }
}