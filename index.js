function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var msg = '';
  if (line.length > 0) {
    msg = `Currently serving ${line[0]}.`;
    line = line.shift();
  } else {
    msg = 'There is nobody waiting to be served!';
  }
  return msg;
}

function currentLine(line) {
  var msg = '';
  if (line.length > 0) {
    msg = 'The line is currently: ';
    for (var i = 0; i < line.length; i++) {
      if (i === 0) {
        msg += `${i+1}. ${line[i]}`;
      } else {
        msg += `, ${i+1}. ${line[i]}`;
      } 
    }
  } else {
    msg = 'The line is currently empty.';
  }
  return msg;
}
  
