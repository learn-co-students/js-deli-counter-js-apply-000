var katzDeliLine = [];

function takeANumber (line, name) {
  line.push(name)
  var message = "Welcome, " + name + ". You are number " + line.length + " in line."
  return message
}

function nowServing (line) {
  if (line.length >= 1) {
    return "Currently serving " + line.shift() + "."
  } else {
    var nobodyServed = "There is nobody waiting to be served!"
    return nobodyServed
  }
}

function currentLine (line, name) {
  if (line.length >= 1) {
    var i = 0
    var nameAndLine = [];
    for (i = 0; i < line.length; i++) {
      nameAndLine.push(i + 1 + ". " + line[i])
    }
    return "The line is currently: " + nameAndLine
  } else {
    var emptyLine = "The line is currently empty."
    return emptyLine
  }
}