var katzDeli = [];
function takeANumber(katzDeliLine, name) { 
  let n = (katzDeliLine.length);
  katzDeliLine.push(name);
  return (`Welcome, ${katzDeliLine[n]}. You are number ${n + 1} in line.`)
}
function nowServing(deliLine) {
  if (deliLine.length >= 1) {
    return (`Currently serving ${deliLine.shift()}.`)
  }
if (deliLine.length === 0) {
    return ('There is nobody waiting to be served!')
  }
}
function currentLine(line) {
  if (line.length >= 1) {
    return (`The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`)
  }
  if (line.length === 0) {
    return ('The line is currently empty.')
  }
}