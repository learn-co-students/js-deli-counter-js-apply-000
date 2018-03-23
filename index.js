function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  return 'Currently serving ' + katzDeliLine.shift() + '.' || 'There is nobody waiting to be served!';
}

function currentLine(katzDeliLine) {
  var output = 'The line is currently:';
  katzDeliLine.forEach(function(el, i) {
    output += ' ' + (i + 1) + '. ' + el + ',';
  });
  return output.slice(0, -1);
}