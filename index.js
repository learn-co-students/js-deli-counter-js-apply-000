var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
   return `Currently serving ${katzDeliLine.shift()}.`
  } else {
   return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  let lineNamesNums = [];
  for (let i = 0; i < line.length; i++) {
    lineNamesNums.push((i+1) + ". "+ line[i])
  }
  if (line.length > 0) {
    return `The line is currently: ${lineNamesNums.join(', ')}`
  } else {
    return `The line is currently empty.`
  }
}