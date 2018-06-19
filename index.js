function takeANumber(line, person) {
  let position = line.length + 1;
  line.push(person);
  return `Welcome, ${person}. You are number ${position} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  let order = "The line is currently: ";
  let lineLen = line.length;

  if (lineLen === 0) {
    return "The line is currently empty.";
  } else {
    for (let i = 0; i < lineLen - 1; i++) {
      order += `${i + 1}. ${line[i]}, `;
    }
    order += `${lineLen}. ${line[lineLen - 1]}`;
  }
  return order;
}
