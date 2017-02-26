
var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){

  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

/*Build a function currentLine that returns the current line. For example, if
katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would
return "The line is currently: 1. Ada 2. Grace". If there is nobody in line, it
should return "The line is currently empty."*/

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var namesWithNumbers = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      namesWithNumbers.push(`${i+1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently: ${namesWithNumbers.join(", ")}`;
  }
}
