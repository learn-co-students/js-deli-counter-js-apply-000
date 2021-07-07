function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    var phrase = `The line is currently: 1. ${katzDeliLine[0]}`;
    for (var i = 1; i < katzDeliLine.length; i++) {
      phrase += `, ${i + 1}. ${katzDeliLine[i]}`;
    }
    return phrase;
  }
}