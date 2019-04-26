var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    return 'Welcome,' + name + 'You are number' + katzDeliLine.length + 'in line.'
}

function currentLine(n) {
  var peopleInLine = []
  if (x.length === 0)
      return "The line is currently empty."
  } else {
    for (var i= 0; i <n; i++) {
    peopleInLine += (i + 1) + '.' + n[i] + ','
  }
    line = line.slice(0, line.length-2)
    return "The line is currently:" + line
  }
}

function nowServing(n) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!"
  }  else
    return 'Currently serving,' + name + '.';
}
