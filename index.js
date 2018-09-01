function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}


function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}


// Tried but couldn't come up with anything better than this for loop.
function currentLine(line) {
  if (line.length > 0) {
    const queue = []
    for (let i = 0; i < line.length; i++) {
      queue.push(`${i+1}. ${line[i]}`)
    }
    return `The line is currently: ${queue.join(', ')}`
  } else {
    return 'The line is currently empty.'
  }
}
