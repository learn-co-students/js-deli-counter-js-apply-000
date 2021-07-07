function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.'
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  }
  
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var line_string = "The line is currently: ";
    var i = 0;
    while (i < katzDeliLine.length) {
      if (i !== katzDeliLine.length - 1) {
        line_string = line_string + Number(i+1) + '. ' + katzDeliLine[i] + ', ';
        i++;
      }
      if (i === katzDeliLine.length - 1) {
        line_string = line_string + Number(i+1) + '. ' + katzDeliLine[i];
        i++;
      }
    }
    return line_string
  }
}