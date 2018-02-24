var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var nextOnLine = katzDeliLine.shift();
    return 'Currently serving ' + nextOnLine + '.';
  }
}

function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return 'The line is currently empty.'
    } else {
      var newStr = 'The line is currently: '
      for (var i = 0; i < katzDeliLine.length; i++) {
        var name = katzDeliLine[i]
        var position = i + 1;

        if (i === katzDeliLine.length - 1) {
          newStr += position + '. ' + name;
        } else {
          newStr += position + '. ' + name + ', ';
        }
      }
    }

  return newStr;
}
