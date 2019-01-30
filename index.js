var katzNumber = [];

function takeANumber(katzNumber, name){
  katzNumber.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzNumber.length} in line.`);
}

function nowServing(katzDeliLine){
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

var line = []
function currentLine(deliLine){
  let i = 0;
  while (i < deliLine.length) {
    line.push(` `+ [i+1] + `. `  + deliLine[i])
    i++;
  }
  if(deliLine.length === 0) {
  return "The line is currently empty.";
    }else
    return (`The line is currently:` + line);
}