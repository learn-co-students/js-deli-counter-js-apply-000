const takeANumber = (currLine, name) => {
  currLine.push(name);
  return `Welcome, ${name}. You are number ${currLine.length} in line.`;
}

const nowServing = currLine => {
  if (currLine.length) {
    const firstCust = currLine.shift();
    return `Currently serving ${firstCust}.`;
  } else {
  return "There is nobody waiting to be served!";
  }
}

const currentLine = currLine => {
  if (currLine.length === 0) return "The line is currently empty.";
  var line = 'The line is currently: ';
  for (let i = 0; i < currLine.length -1; ++i) {
    line += `${i + 1}. ${currLine[i]}, `;
  }
  line += `${currLine.length}. ${currLine[currLine.length - 1]}`
  
  return line;
}