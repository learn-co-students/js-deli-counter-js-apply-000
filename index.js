function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if(!line.length) {
    return "There is nobody waiting to be served!";
  } else {
    var first = line.shift();
    return `Currently serving ${first}.`;
  }
}

function currentLine(line) {
  var str = "The line is currently: ";
  if(!line.length){
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < line.length; i++) {
      str += `${(i + 1)}. ${line[i]}, `;
    }
  }

  return str.slice(0,-2);
}
