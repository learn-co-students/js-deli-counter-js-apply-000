var katzDeliLine = [];

function takeANumber (line,name) {
  line.push(name);
  let greeting = `Welcome, ${name}. You are number ${line.length} in line.`;
  return greeting
}

function nowServing (line) {
  let serving;
  if (line.length === 0) {
    serving = "There is nobody waiting to be served!"
  } else {
    let name = line.shift();
    serving = `Currently serving ${name}.` 
  }
  
  return serving
}

function currentLine (line) {
  let lineString = ''
  if (line.length ===0) {
    return 'The line is currently empty.'
  } else {
    lineString = 'The line is currently: ';
    for (let i = 0; i < line.length; i++) {
      lineString = lineString + (i + 1) + ". " + line[i];
      if (i !== line.length-1) {
        lineString = lineString + ', ';
      }
    }
  }
  
  return lineString
}