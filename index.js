var katzDeli = [];

function takeANumber(katzDeli, customer) {
  katzDeli.push(customer);
  return `Welcome, ${customer}. You are number ${katzDeli.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine, deliLine.length !== 0) {
    var served = deliLine.shift();
    return `Currently serving ${served}.`;
  } else {
    return "There is nobody waiting to be served!";
  } 
  
}

function currentLine(line) {
  var numberInLine = [];
  let i = 1;
  while (i <= line.length) {
    numberInLine.push(` ${i}. ${line[i-1]}`);
    i++;
  }
  if (line.length !== 0) {
    return `The line is currently:${numberInLine}`;
  } else {
    return `The line is currently empty.`;
  }
}