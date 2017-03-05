var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var num = katzDeliLine.indexOf(name) + 1;
  return 'Welcome, ' + name + '.' + ' You are number ' + num + ' in line.';
}

function nowServing(line) {
  var newAry = [];
  if (line.length > 0) {
    newAry.push('Currently serving ' + line[0] + '.');
    line.shift();
  } else {
    return 'There is nobody waiting to be served!';
  }
  return newAry.join("");
}

function currentLine(line) {
  if (line.length < 1) {
    return 'The line is currently empty.';
  } else {
    var newAry = [];
    for (var i = 0; i < line.length; i++) {
      newAry.push((i + 1) + '. ' + line[i] + ', ');
    }
    var string = newAry.join('');
    var newString = string.substring(0, string.length - 2);
    return 'The line is currently: ' + newString;
  }
}
