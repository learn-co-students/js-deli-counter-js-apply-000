function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${deliLine.shift()}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var waitingLine = "The line is currently:"
    var i = 0
    var len = line.length

    for (;i < len; i++) {
      if (i > 0) {
        waitingLine = `${waitingLine}, ${i + 1}. ${line[i]}`
      } else {
        waitingLine = `${waitingLine} ${i + 1}. ${line[i]}`
      }
    }
    return waitingLine
  }
}
