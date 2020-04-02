const customers = [];

function takeANumber(deliLine, name) {
  deliLine.push(name);

  return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
}

function nowServing(deliLine) {
  if (!deliLine.length) {
    return "There is nobody waiting to be served!";
  }

  return `Currently serving ${deliLine.shift()}.`;
}

function currentLine(deliLine) {
  if (!deliLine.length) {
    return "The line is currently empty.";
  }

  for (var i = 0, l = deliLine.length; i < l; i++) {
    customers.push(`${i + 1}. ${deliLine[i]}`);
  }
  
  return `The line is currently: ${customers.join(', ')}`;
}

