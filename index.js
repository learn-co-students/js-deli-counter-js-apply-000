const katzDeli = [];

function formatGreeting(name, position) {
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function takeANumber(katzDeliLine, name) {
  const position = katzDeliLine.length + 1;
  katzDeliLine.push(name);

  return formatGreeting(name, position);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }

  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine) {
  const length = katzDeliLine.length;
  const temp = length - 1;

  if (length === 0) {
    return 'The line is currently empty.'
  }

  let output = 'The line is currently: ';
  let index = 0;

  while (index < length) {
    output += `${index + 1}. ${katzDeliLine[index]}`;

    if (temp !== index) output += ', ';
    index++;
  }

  return output;
}
