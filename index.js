function takeANumber(line,name) {
  let customerPlace = line.length + 1;
  line.push(name);
  return `Welcome, ${name}. You are number ${customerPlace} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  let nextCustomer = line[0];
  line.shift();
  return 'Currently serving ' + nextCustomer + ".";
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  }
  let lineForOutput = 'The line is currently: ';
  // Iterate over the line
  for ( let i = 0; i < line.length; i++) {
    let place = i + 1;
    let name = line[i];
    let end = (i + 1 === line.length) ? '' : ', ';
    lineForOutput += `${place}. ${name}${end}`;
  }
  return lineForOutput;
}




