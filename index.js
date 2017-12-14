var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  var customer = katzDeliLine.shift();
  return `Currently serving ${customer}.`
}

function currentLine(katzDeliLine) {
  var string = "The line is currently:";
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (i === (katzDeliLine.length - 1)) {
      string += ` ${i + 1}. ${katzDeliLine[i]}`;
    } else {
      string += ` ${i + 1}. ${katzDeliLine[i]},`;
    }
  }
  return string; 
}