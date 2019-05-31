function takeANumber(katzDeliLine,name){
  var lineposition = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${lineposition} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0)
  return "There is nobody waiting to be served!";
  var name;
  name = katzDeliLine.shift(name);
  return "Currently serving "+ name +".";
}

var line = [];
function currentLine(katzDeliLine) {
let i = 0;
  while (i < katzDeliLine.length) {
    line.push(` `+[i+1]+`. `  + katzDeliLine[i])
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}