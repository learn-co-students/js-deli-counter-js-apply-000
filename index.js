function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line) {
  if (Array.isArray(line) && line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  let nextPerson = line.splice(0, 1);
  
  return "Currently serving " + nextPerson + ".";
}

function currentLine(line) {
  if (Array.isArray(line) && line.length === 0) {
    return `The line is currently empty.`;
  }
  
  let lineWithPositions = [];
  
  line.forEach((name, i) => {
    const position = i + 1;
    lineWithPositions.push(`${position}. ${name}`);
  });
 
  return `The line is currently: ${lineWithPositions.join(", ")}`;
}