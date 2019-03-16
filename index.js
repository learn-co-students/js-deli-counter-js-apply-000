function takeANumber (katzDeliLine,name) {
  katzDeliLine.push(name)
  return 'Welcome, ' + name + '. You are number ' + (katzDeliLine.length) + ' in line.'
}

function nowServing (katzDeliLine) {
  var ans = ''
  if (katzDeliLine.length === 0) {
    ans = 'There is nobody waiting to be served!'
  } else {
    ans = 'Currently serving ' + katzDeliLine.shift() + '.'
    }
  return ans
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
    } else {
  var i = 1
  var line = '1. ' + katzDeliLine[0]
  while (i < katzDeliLine.length) {
    line = line.concat(', ' + (i+1) + '. ' + katzDeliLine[i])
    i++
    }
  return 'The line is currently: ' + line
  }
}