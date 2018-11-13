let katzDeliLine = [];

function takeANumber(deliLine, name) {
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
}

function nowServing(deliLine) {
  let servingNow = deliLine[0];
  
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    deliLine.shift();
    return `Currently serving ${servingNow}.`;
  }
}

function currentLine(deliLine) {
  let deliLineString = [];
  
  if (deliLine.length === 0) {
      return "The line is currently empty.";
  } else {
      for (let i in deliLine) {
        deliLineString = [...deliLineString,` ` + (parseInt(i) + 1) + `. ${deliLine[i]}`];
      } 
      return `The line is currently:${deliLineString}`;
  }
}