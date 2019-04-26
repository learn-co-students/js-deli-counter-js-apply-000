var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    return 'Welcome,' + name + 'You are number' + katzDeliLine.length + 'in line.'
}

function currentLine(n) {
  var peopleInLine = []
  if (n.length === 0) {
      return "The line is currently empty."
  } else {
    for(var i= 0; i < n.length; i++) {
    peopleInLine += (i + 1) + '.' + n[i] + ','
  }
    line = line.slice(0, line.length-2)
    return "The line is currently:" + line
  }
}

function nowServing(n) {
  if (n.length === 0) {
    return "There is nobody waiting to be served!"
  }  else {
     var name = n[0];
     n.splice(0, 1);
     return 'Currently serving,' + name + '.';
  }
}
