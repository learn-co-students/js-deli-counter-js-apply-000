

function takeANumber(deliLine, name) {
  var yourNumber = deliLine.length + 1;
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${yourNumber} in line.`;
}

function nowServing(deliLine) {
  var first = deliLine.shift();
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${first}.`;
}

function currentLine(deliLine) {
  var namesStr = "";
  for(var i = 0; i < deliLine.length; i++) {
    namesStr += `${i + 1}. ${deliLine[i]}`;
    if(i !== deliLine.length - 1) {
      namesStr+=", ";
    }
  }
  if (deliLine.length === 0) {
      return "The line is currently empty."; 
    }
  return `The line is currently: ${namesStr}`;  
}
