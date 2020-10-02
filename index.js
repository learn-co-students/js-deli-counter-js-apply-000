function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var name = "";
  if(line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    name = line.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(line) {
  var string = "The line is currently: ";
  if(line.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < line.length - 1; i++) {
      string = string.concat(`${i + 1}. ${line[i]}, `);
    }
    string = string.concat(`${i + 1}. ${line[i]}`);
  }
  return string;
}
