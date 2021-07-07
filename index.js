function takeANumber(current_line, new_guest) {
  current_line.push(new_guest)
  return "Welcome, " + new_guest + ". You are number " + current_line.length + " in line."
}
takeANumber(katzDeliLine, 'Ada')
function nowServing(current_line) {
  if (current_line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var first_person = current_line[0]
    current_line.shift()
    return "Currently serving " + first_person + "."
  }
}
nowServing(katzDeliLine)
function currentLine(current_line) {
  if (current_line.length === 0) {
    return "The line is currently empty."
  } else {
    var message = "The line is currently: "
    for (var i=0; i<current_line.length; i++) {
      if (i<current_line.length - 1) {
        message = message + parseInt(i+1) + ". " + current_line[i] + ", "
      } else {
        message = message + parseInt(i+1) + ". " + current_line[i]
      }
    }
    return message
  }
}
currentLine(katzDeliLine)