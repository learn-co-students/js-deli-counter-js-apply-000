const takeANumber = (line, customer) => {
  let string = '';
  line.push(customer);
  return string = `Welcome, ${customer}. You are number ${line.length} in line.`;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

const nowServing = (line) => (line.length === 0) ? 'There is nobody waiting to be served!' : `Currently serving ${line.shift()}.`;

///////////////////////////////////////////////////////////////////////////////////////////////////////

const currentLine = (line) => {
  const lineWithComma = line.join(', ').split(' ');
  let string = 'The line is currently:'
  if (line.length === 0) {
    return 'The line is currently empty.'
  }
  else {
    for (let i = 0; i < lineWithComma.length; i++) {
      string += ' ' + `${i+1}. ${lineWithComma[i]}`
    }
  }
  return string; 
}

