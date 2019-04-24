var katzDeliLine = []
function takeANumber(katzDeliLine) {
  return "Welcome, ${name} + You are number ${number} in line."
}

function currentLine(katzDeliLine) {
  if (katzDeliLine > num) {
    return "Now serving, ${name}"
  }  else
      return "There is nobody waiting to be served!"
}

function nowServing(katzDeliLine) {
  if (katzDeliLine > num) {
    return `The line is currently: ${number}, ${name}`
}    else
      return "The line is currently empty."
}
