function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};
function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const queue = []

  for (let i = 0, l = line.length; i < l; i++) {
    queue.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${queue.join(', ')}`
};
