function takeANumber(line, name) {
  line.push(name);
  return (`Welcome, ${name}. You are number ${line.length} in line.`);
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var firstInLIne = line[0];
  line.shift();
  return `Currently serving ${firstInLIne}.`;
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  var output = "The line is currently:" 
  for (var i = 0; i < line.length; i++) {
    if(i === 0) {
      output = output + ` ${i+1}. ` + line[i];
    } 
    else {
     output = output + `, ${i+1}. ` + line[i];
    }
  }
  return output;
}

