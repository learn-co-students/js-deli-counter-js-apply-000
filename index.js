var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    let serving = line.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    let katzDeliLine = []
    let i = 1
    line.forEach(name => {
      katzDeliLine.push(` ${i}. ${name}`)
      i++
    })
    return `The line is currently:${katzDeliLine}`
  }
}
