var katzDeliLine = ["jason", "freddy", "anna"];

function takeANumber(katzDeliLine, newComer) {
  katzDeliLine.push(newComer);
  return `Welcome, ${newComer}. You are number ${katzDeliLine.length} in line.`;
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
  if (katzDeliLine>[]) {
    for (let i=0; i<katzDeliLine.length; i++) {
      line.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently:"+ line;
    } else {
      return "The line is currently empty."
    }
}
