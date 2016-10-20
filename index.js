function takeANumber(katzLine, name) {
  katzLine.push(name)
  return `Welcome, ${name}. You are number ${katzLine.length} in line.`
}

function nowServing(katzLine) {
  if (katzLine.length === 0) {
    return "There is nobody waiting to be served!" // if line length 0, return this
  } else {
    return `Currently serving ${katzLine.shift()}.` // shift function runs in template strings? neat
  }
}

function currentLine(katzLine) {
  if (katzLine.length === 0) {
    return "The line is currently empty." // if line is 0, return this msg
  } else {
    var announcement = 'The line is currently: '
    // output string: `${i}. ${name}, ` except for last in index
    var lineOutput = []
    for (let i = 0; i < katzLine.length - 1; i++) {
      announcement = announcement + `${i + 1}. ${katzLine[i]}, `
    }
    // now append the last index value
    announcement = announcement + `${katzLine.length}. ${katzLine[katzLine.length - 1]}`
    return announcement
  }

}
