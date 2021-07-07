const takeANumber = (line, name) => {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

const nowServing = line => {
  if (!line.length) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

const currentLine = line => {
  if (!line.length) {
    return "The line is currently empty.";
  } else {
    let numberedLine = [];
    for (let i = 0; i < line.length; i++) {
      numberedLine.push(`${i + 1}. ${line[i]}`)
    }
    return `The line is currently: ${numberedLine.join(', ')}`;
  }
}
