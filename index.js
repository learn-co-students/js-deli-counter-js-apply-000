function takeANumber(katzDeliLine, name) {
  //returns their position in line
  katzDeliLine.push(name);
  return "Welcome, " + name + '. You are number ' + katzDeliLine.length + ' in line.'
}

function nowServing(katzDeliLine) {
  //returns first person in line and removes that individual from the line
  //if there's noone in line, returns the string, "There is nobody waiting to be served!"
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  var first = katzDeliLine.shift()
  return 'Currently serving ' + first + '.'
}

function currentLine(katzDeliLine) {
  var current = 'The line is currently: '
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length - 1) {
        current += (i + 1) + '. ' + katzDeliLine[i]
      } else {
        current += (i + 1) + '. ' + katzDeliLine[i] + ', '
      }
    }
  }
  return current
}
