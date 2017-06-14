//(katzDeliLine, name?)

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeli.length + ' in line.';
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  return 'Currently serving ' + katzDeliLine.shift() + '.';
} else {
  return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    var lineIntro = 'The line is currently: ';
    var names = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
    names.push((i + 1) + '. ' + katzDeliLine[i]);
    }
    return lineIntro + names.join(', ')
  }
}
