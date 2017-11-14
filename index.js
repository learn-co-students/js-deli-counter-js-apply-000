var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(array){
  var newArray = [];
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${array.shift()}.`
  }
}

function currentLine(line) {
  var newLine = [];
  if (!line.length) {
    return "The line is currently empty."
  }
    for (let i = 0; i < line.length; i++) {
      newLine.push(`${i + 1}. ${line[i]}`)
      }
      return `The line is currently: ${newLine.join(', ')}`
  }
