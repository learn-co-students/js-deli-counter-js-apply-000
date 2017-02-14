function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length > 0) return `Currently serving ${line.shift()}.`;
  else return "There is nobody waiting to be served!";
}

function currentLine(line) {
  if (line.length == 0) return "The line is currently empty.";
  else {
    var lineString = "The line is currently: "
    for (var i = 0; i < line.length; i++) {
      lineString = lineString.concat(`${i + 1}. ${line[i]}, `);
    }
    return lineString.slice(0, -2) // remove last comma and return
  }
}
