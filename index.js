//Adds person to line, returns message to person welcoming, and telling number in line
function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`;
}

//Says who is being served, takes them out of line.
function nowServing(line) {
  let message = '`';
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    message = `Currently serving ${line[0]}.`;
    line.shift();
  }
  return message;
}

//Returns current line
function currentLine(line) {
  let peopleInLine = `The line is currently: `;
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    for (let i = 0; i < line.length; i++) {
      i !== line.length - 1 ? peopleInLine += `${i + 1}. ${line[i]}, ` : peopleInLine += `${i + 1}. ${line[i]}`;
    }
  }
  return peopleInLine;
}
