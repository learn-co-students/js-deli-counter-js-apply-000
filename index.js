function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var resultString = "The line is currently:"
  if (line.length > 0) {
    for (let i = 0; i < line.length; i++) {
      //could also use join 
      if (i === line.length - 1) {
        resultString += ` ${i + 1}. ${line[i]}`
      } else {
        resultString += ` ${i + 1}. ${line[i]},`
      }
    }
  } else {
    return "The line is currently empty."
  }
  return resultString;
}