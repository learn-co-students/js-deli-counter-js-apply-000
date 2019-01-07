var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return ('Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.');
}

katzDeliLine = ['Steve', 'Joe', 'Avi'];

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!")
  } else if (katzDeliLine.length > 0) {
    return ("Currently serving " + katzDeliLine.shift() + '.');
  }
}

katzDeliLine = ['Sara', 'Joe', 'Lynn'];

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.");
  }
  return ("The line is currently: " + katzDeliLine.toString())
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.");
  }
  var onLine = [];
  onLine.push("1. " + katzDeliLine[0] + ", 2. " + katzDeliLine[1] + ", 3. " + katzDeliLine[2])
  return ("The line is currently: " + onLine);
}
