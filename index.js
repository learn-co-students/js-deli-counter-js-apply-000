function takeANumber(current, name){
  current.push(name);
  return `Welcome, ${name}. You are number ${current.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine[0]) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${katzDeliLine.shift(0)}.`;
  }
}

function currentLine(line) {
  if (!line.length) {
    return 'The line is currently empty.';
  }
  let lineArray = [];
  
  for (let i = 0; i < line.length; i++) {
    lineArray.push(i + 1 + '. ' + line[i])
  }
  return 'The line is currently: ' + lineArray.join(', ')
}