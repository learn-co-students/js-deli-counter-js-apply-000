let katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    var next = line.shift();
    return `Currently serving ${next}.`;
  }
}

function currentLine(line) {
  var nameNumber = [];
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      nameNumber.push(`${i + 1}. ${line[i]}`);
    }
    return `The line is currently: ${nameNumber.join(", ")}`;
  } else {
    return `The line is currently empty.`;
  }
}
