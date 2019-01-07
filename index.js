function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.indexOf(person) + 1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return 'There is nobody waiting to be served!';
  }
  var serving = katzDeliLine.shift();
  return `Currently serving ${serving}.`;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  }

  var str = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    str.push(`${i + 1}. ${katzDeliLine[i]}`);
  }
  return "The line is currently: " + str.join(", ");
}
