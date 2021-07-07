function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
  return "There is nobody waiting to be served!";
} else {
  return `Currently serving ${line.shift()}.`;
}
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } 
  var nameAndNumber = [];
  for (var i = 0; i < line.length; i++) {
    nameAndNumber.push([i+1] + ". " + line[i]);
  }
  return "The line is currently: " + nameAndNumber.join(", "); 
  // had to research and found .join() / if not added, error occurred with pushed indexes not being separated with a space between comma and next index
}