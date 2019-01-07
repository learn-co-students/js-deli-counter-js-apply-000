function takeANumber(arrayLine, name) {
  arrayLine.push(name)
  return `Welcome, ${name}. You are number ${arrayLine.length} in line.`
}

function nowServing(arrayLineOne) {
  if (arrayLineOne.length < 1) {
    return "There is nobody waiting to be served!"
  }
    return `Currently serving ${arrayLineOne.shift()}.`
}

function currentLine(arrayLineTwo) {
  var myArray = []
  // establish line is empty
  if (arrayLineTwo < 1) {
    return "The line is currently empty."
  }
    for (var i = 0; i < arrayLineTwo.length; i++) {
      myArray.push(`${i+1}. ${arrayLineTwo[i]}`)
    }
    return `The line is currently: ${myArray.join(', ')}`
}
