const takeANumber = (line, name) => {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

const nowServing = (line) => line.length ? `Currently serving ${line.shift()}.`: 'There is nobody waiting to be served!';

const currentLine = (line) => {
  let currentLine = 'The line is currently: ';
  if (line.length === 0) { return "The line is currently empty." }
  for (let i = 0; i < line.length; i++) {
    i < line.length -1 ? currentLine += `${i + 1}. ${line[i]}, `: currentLine += `${i + 1}. ${line[i]}`;
  }
  return currentLine;
};