function takeANumber(currentLine, name) {
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
  if  (currentLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
  return `Currently serving ${currentLine.shift()}.`
  }
}

function currentLine(katzLine) {
  if (katzLine.length === 0) {
    return "The line is currently empty."
  }
  
  var i = 0;
  var people = [];
  
  while (i < katzLine.length) {
    people.push(`${1+i}. ${katzLine[i]}`);
    i++;
  }
    return `The line is currently: ${people.join(', ')}`;
}