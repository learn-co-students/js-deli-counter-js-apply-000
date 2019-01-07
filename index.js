var katzDeli = [];

function takeANumber(katzDeliLine, name) { // function should return the persons position in line
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing(katzDeliLine) { // should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobdoy waiting to be served!"
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var serving = katzDeliLine.shift();
    return `Currently serving ${serving}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0, text = "The line is currently: "; i < katzDeliLine.length; i++) {
      text += `${i+1}. ${katzDeliLine[i]}, `
    }
    return text.slice(0, (text.length - 2));
  }
}
