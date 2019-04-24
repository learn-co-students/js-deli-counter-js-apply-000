
function takeANumber(name, number) {
  return "Welcome, ${name} + You are number ${number} in line."
}

function currentLine(name, number) {
  if (number > 0) {
    return "Now serving, ${name}"
  }  else
      return "There is nobody waiting to be served!"
}

function nowServing(name, number) {
  if (number > 0) {
    return `The line is currently: ${number}, ${name}`
}    else
      return "The line is currently empty."
}
