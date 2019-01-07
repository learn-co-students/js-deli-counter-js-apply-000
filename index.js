function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name) + 1;

  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }

  var sentence = "The line is currently:";
  var i = 0;
  while (i < katzDeliLine.length -1) {
    sentence += ` ${i + 1}. ${katzDeliLine[i]},`
    i++; 
  }
  
  if (i === katzDeliLine.length -1) {
    sentence += ` ${i + 1}. ${katzDeliLine[i]}`
  }

  return sentence;
}
