const takeANumber = (line, cust) => {
  let line1 = line.length + 1;
  line.push(cust);
  
  return 'Welcome, ' + cust + '. You are number ' + line1 + ' in line.'
}

const nowServing = (line) => {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  let now = line.splice(0, 1);
  return 'Currently serving ' + now + '.';
}

const currentLine = (line) => {
  if (line.length === 0) {
    return 'The line is currently empty.';
  }
  let line2 = 'The line is currently: ';
  for (let i = 0; i < line.length; i++) {
    let cur = line[i];
    line2 += i + 1 + '. ' + cur + ', ';
  }
  line2 = line2.substring(0, line2.length - 2)
  return line2; 
}