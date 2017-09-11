
function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
};

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`
  }
  else if (line.length == 0) {
    return "There is nobody waiting to be served!"
  };
};

function currentLine(line) {
  var newLine = []
  if (line.length == 0) {
    return "The line is currently empty."
  } else if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      newLine.push(`${i + 1}. ${line[i]}`)
    }
    return `The line is currently: ${newLine.join(", ")}`
  }
}
