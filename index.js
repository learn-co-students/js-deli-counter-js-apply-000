katzDeli = [];

function takeANumber(line, name) {
/*
  push the name into the line
  get the index of their name and tell them the location in the line
*/
line.push(name);
let position = line.indexOf(name) + 1;
return `Welcome, ${name}. You are number ${position} in line.`;

}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    return line.shift();
  }
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty.";
  } else {
    for (let i=0; i < line.length; i++) {
      let position = i + 1;
      let name = line[i]
      return `the line is currently: ${position}. ${line[i]}`;
    }
  }
}
