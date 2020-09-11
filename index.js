let katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`; 
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  }
}
  
  function currentLine(newLine) {
    let line = [];
    if (newLine.length === 0) {
      return 'The line is currently empty.'
    } else {
      for (let i = 0; i < newLine.length; i++) {
        line += (i + 1) + '. ' + newLine[i] + ', '
      }
      line = line.slice(0, line.length - 2);
      return 'The line is currently: ' + line;
    }
  }