var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var i = 0;
  var line = "The line is currently: ";
  while (i < katzDeliLine.length) {
    var place = i + 1;
    line += `${place}. ${katzDeliLine[i]}, `;
    i++;
  }
  return line.slice(0, -2);
}
