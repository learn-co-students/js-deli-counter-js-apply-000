function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var message = 'The line is currently:'

    for (var counter = 0; counter < line.length - 1; counter++) {
      message = message.concat(` ${counter + 1}. ${line[counter]},`)
    } message = message.concat(` ${counter + 1}. ${line[counter]}`)
  } return message
}

/* Rather than add another if statement to handle the last person not needing a comma, I stop the loop before the last person and add another concat to handle their special case. The loop is ended early by comparing the counter to the line length minus 1.
*/