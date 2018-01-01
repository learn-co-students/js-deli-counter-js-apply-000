function takeANumber(line, name) {

  line.push(name);

  return `Welcome, ${name}. You are number ${line.length} in line.`

}

function nowServing(line) {
  if (line.length > 0) {
    return "Currently serving " + line.shift() + ".";
} else {
    return "There is nobody waiting to be served!"
}
}

function currentLine(line) {
  if (line.length === 1) {
    return  `The line is currently: 1. ${line[0]}`
} else if (line.length === 2) {
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}`
} else if (line.length === 3) {
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
}  else {
    return "The line is currently empty."
}
}
