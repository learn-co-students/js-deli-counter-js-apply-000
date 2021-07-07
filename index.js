var line = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length>1) {
  var customer = line[0];
  line.shift();
  return `Currently serving ${customer}.`
} else {
  return "There is nobody waiting to be served!"
}
}

function currentLine(line) {
  var current=[];
  if (line.length===0) {
    return "The line is currently empty."
  } else {
    for (var i=0; i<line.length; i++) {
      current.push(`${i+1}. ${line[i]}`)
    }
    return "The line is currently: " + `${current.join(', ')}`
  }
}
