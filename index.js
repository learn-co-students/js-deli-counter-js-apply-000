const takeANumber = (currentLine, name) => {
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(line) {
  return line.length > 0 ? "Currently serving " + line.shift() + "." : "There is nobody waiting to be served!";
}

function currentLine(line) {
  if (line.length === 0) return "The line is currently empty.";
  var outText = "The line is currently: ";
  line.forEach(function(val, i) {
    outText += (i + 1) + ". " + val + ", ";
  });
  return outText.slice(0, -2);
}
