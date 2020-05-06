function takeANumber(deliLine, newCustomer) {
  deliLine.push(newCustomer);
  let position = deliLine.indexOf(newCustomer) + 1;
  return `Welcome, ${newCustomer}. You are number ${position} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${deliLine.shift()}.`;
  }
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    let announcement = 'The line is currently:';
    for (let i=0; i<deliLine.length; i++) {
      let customer = deliLine[i];
      let position = i+1;
      announcement += ` ${position}. ${customer},`;
    }
    return announcement.slice(0,-1);
  }
}