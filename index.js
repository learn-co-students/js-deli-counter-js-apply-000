function takeANumber(katzDeliLine, name) 
{
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) 
{
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var person = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${person}.`;
  }
}

function currentLine(katzDeliLine)
{
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var string = `The line is currently: 1. ${katzDeliLine[0]}`;
    var current = 1;
    while (current < katzDeliLine.length) {
      string = string + `, ${current + 1}. ${katzDeliLine[current]}`;
      current++;
    }
    return string;
  }
}