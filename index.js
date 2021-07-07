var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}
function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!";
  }
  else {
    var person = line.shift();
    return `Currently serving ${person}.`;
  }
}
function currentLine(line) {
  var list = [];
  if (line.length < 1) {
    return "The line is currently empty.";
  }
  else {
    for (let i = 0; i < line.length; i++) {
      list.push(` ${i+1}. ${line[i]}`);
    }
    return `The line is currently:${list}`; 
  }
}