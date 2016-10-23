var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  for (let i = 0; i < name.length; i++) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
      return `Currently serving ${katzDeliLine.shift()}.`
    }
}

function currentLine(katzDeliLine) {
  var currentLine = []
  var n = 1
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      currentLine.push(` ${n}. ${katzDeliLine[i]}`)
      n+=1
    }
    return "The line is currently:" + currentLine
  }
}
