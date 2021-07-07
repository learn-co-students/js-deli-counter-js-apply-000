// takeANumber welcomes customers with name and position in line
var takeANumber = function(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;
}

// nowServing announces the first person in line and removes them from the array
// or returns a message when the line is empty
var nowServing = function(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  };
}

// currentLine returns line as a string ('The line is currently: 1. name, etc')
var currentLine = function(katzDeliLine) {
  const thisLine = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    thisLine.push(` ${i + 1}. ${katzDeliLine[i]}`)
  };
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  } else {
    return `The line is currently:${thisLine}`
  };
}
