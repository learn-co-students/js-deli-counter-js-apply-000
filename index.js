function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  if (line.length > 0) {
    var firstPerson = line[0];
    line.shift();
    return `Currently serving ${firstPerson}.`;
  }
}

function currentLine(line) {
  var i;
  var result = 'The line is currently: ';
  if (line.length === 0) {
    return 'The line is currently empty.';
  }
  
  for (i = 0; i < line.length; i++) {
    var j = i + 1;
    if (i < line.length - 1) {
      result = result + `${j}. ${line[i]}, `;
    } else {
      result = result + `${j}. ${line[i]}`;
    }
  }
  
  return result;
}