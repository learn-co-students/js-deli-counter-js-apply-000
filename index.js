var katzDeliLine = [];
var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var linePosition = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  katzDeli.push({[name]: [linePosition]});
  return `Welcome, ${name}. You are number ${linePosition} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var newArray = [];
  if (katzDeliLine.length > 0) {
    for(var i = 0, j = 1; i < katzDeliLine.length; i++, j++) {
      newArray.push(` ${j}. ${katzDeliLine[i]}`);
    }
      return `The line is currently:${newArray}`
  }
  else {
    return "The line is currently empty."
  }
}
