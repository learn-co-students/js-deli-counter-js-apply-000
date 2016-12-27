function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
};

function nowServing(line, name) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line, name) {
  if (!line.length) {
    return "The line is currently empty."
  }else {
           const numbersAndNames = []
           for (let i = 0, l = line.length; i < l; i++) {
           numbersAndNames.push(`${i + 1}. ${line[i]}`)
          }
       return `The line is currently: ${numbersAndNames.join(', ')}`
    }
  }