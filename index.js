
function takeANumber (line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing (line) {
  var first = line[0];
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    line.shift();
    return `Currently serving ${first}.`
    }
  }

function currentLine(line) {
  var numberedLine = [];
  if (line.length == 0) {
    return "The line is currently empty."
  }
  else {
    for (var i = 0, h = i+1; i < line.length; i++, h++) {
      numberedLine.push(`${h}. ${line[i]}`)
    }
  }
return `The line is currently: ${numberedLine.join(", ")}`
}
