function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number "+katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var annouce = "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.shift()
    return annouce
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var lineOrder = "The line is currently:"
    for (let i = 0; i < katzDeliLine.length; i++) {
      lineOrder += " " + (i + 1) + ". " + katzDeliLine[i] +","
  }
  return lineOrder.slice(0, -1)
  }
}