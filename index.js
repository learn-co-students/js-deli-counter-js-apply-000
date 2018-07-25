function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(arr) {
  
  if (!arr.length) {
    return 'There is nobody waiting to be served!'
  }
  
  var currentlyServing = arr.shift();
  return `Currently serving ${currentlyServing}.`;
}

function currentLine(line) {
  var servingCurrently = [];
  
  if (!line.length) {
    return 'The line is currently empty.'
  }
  
  for (var i = 0; i < line.length; i++) {
    servingCurrently.push(`${i + 1}. ${line[i]}`)
  }
  
  return `The line is currently: ${servingCurrently.join(', ')}`
}