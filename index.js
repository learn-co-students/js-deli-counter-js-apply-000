function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

function nowServing(line) {
  if (line.length !== 0) {
    let serving = line[0];
    line.shift();
    return `Currently serving ${serving}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  let output = "The line is currently: ";
  if (line.length !== 0) {
    for (let i = 0; i < line.length; i++) {
      if (i != line.length - 1){
        output += `${i + 1}. ${line[i]}, `;
      } else {
        output += `${i + 1}. ${line[i]}`;
      }
    }
  } else {
    return "The line is currently empty.";
  }
  return output;
}