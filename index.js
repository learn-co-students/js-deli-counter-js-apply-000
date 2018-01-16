function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${(katzDeliLine.indexOf(name) + 1)} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var serving = katzDeliLine.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(katzDeliLine) {
  var result = 'The line is currently: ';

  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length - 1) {
        result += i + 1 + `. ${katzDeliLine[i]}`;
      } else {
        result += i + 1 + `. ${katzDeliLine[i]}, `;
      }
    }
  }

  return result;
}
