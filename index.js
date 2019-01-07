function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  var line = "The line is currently:"
  var counter = 1;
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  for(var i = 0; i < katzDeliLine.length; i++) {
    if(katzDeliLine.length - 1 === i) {
      line += ` ${counter}. ${katzDeliLine[i]}`
    } else {
      line += ` ${counter}. ${katzDeliLine[i]},`
          }
    counter += 1
  }
  return line
}
