var katzDeliLine = [];

//FIRST CODE BLOCK

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
    return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}


//SECOND CODE BLOCK

function nowServing(katzDeliLine) {

let i = 0;
  while (i < katzDeliLine.length) {
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
    return (`Currently serving ${katzDeliLine.shift()}.`);
}



//THIRD CODE BLOCK

var line = [];

function currentLine(katzDeliLine) {
  for (let i = 0; i < katzDeliLine.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeliLine[i])
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else
      return(`The line is currently:` + line);
}
