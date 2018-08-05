function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const NamesAndDigits = []

  for (let i = 0, l = line.length; i < l; i++) {
    NamesAndDigits.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${NamesAndDigits.join(', ')}`
};

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