function takeANumber(line, name) {
  line.push(name);
  if (line.length > 1) {
    return (`Welcome, ${name}. You are number ${line.length} in line.`);
  } else {
    return (`Welcome, ${name}. You are number 1 in line.`);
  }
}

function nowServing(line) {
  if (line.length === 0) {
    return ("There is nobody waiting to be served!");
  }
  return (`Currently serving ${line.shift()}.`);
}

function currentLine(line) {
  if (line.length === 0) {
    return ("The line is currently empty.");
  } 
  
  var numberList = "";
  
  for (let i = 0; i < line.length; i++ ) {
    var pos = i + 1;
    
    if (pos === line.length) {
    numberList += (`${pos}. ${line[i]}`);
    } else {
    numberList += (`${pos}. ${line[i]}, `);
    }
  }
  return "The line is currently: " + numberList;
}
