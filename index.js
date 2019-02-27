const katzDeliLine = [];
var names= [];

function takeANumber(katzDeliLine, string) {
  katzDeliLine.push(string);
  return `Welcome, ${string}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  var next = katzDeliLine.shift();
  var i=0;
  if (i<katzDeliLine.length) {
  return "Currently serving " + next + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}


function currentLine(katzDeliLine) {
  var line=[];
  for (let i=0; i<line.length; i++) {
    line.push(line[i]);
    i++
  }
  if (katzDeliLine>[]) {
    for (let i=0; i<katzDeliLine.length; i++) {
      line.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently:"+ line;
    } else {
      return "The line is currently empty."
    }
}
