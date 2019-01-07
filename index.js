var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var num = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var currentCustomer = katzDeliLine.shift();
  }
  return `Currently serving ${currentCustomer}.`
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  }
  var str = "The line is currently: "
  for (var i = 0; i < katzDeliLine.length-1; i++) {
    str = str.concat(`${i+1}. ${katzDeliLine[i]}, `)
  }
  str = str.concat(`${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length-1]}`)
  return str;
}
