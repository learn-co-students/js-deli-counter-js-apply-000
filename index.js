var katzDeli = []


function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing(katzDeliLine) {
  if(katzDeliLine>[]) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}


// Build a function `currentLine` that accepts the current line of people and returns the current line as a string;
// for example, if 'katzDeliLine' is currently `["Ada", "Grace"]`,
// `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.
// You don't have to use `katzDeliLine` as a variable or parameter name in your function though,
// it's just an example of a variable that might be passed to it.
// If there is nobody in line, it should return `"The line is currently empty."`

function currentLine(katzDeliLine) {
var line=[];
if(katzDeliLine>[]) {
  for(var i=0;i<katzDeliLine.length;i++) {
      line.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently:" + line;
}
    else {
      return "The line is currently empty."
    }
}
