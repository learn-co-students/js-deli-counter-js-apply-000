function takeANumber(katzDeliLine, name) {
  var welcome = 'Welcome, ' + name + '. You are number ' + (katzDeliLine.length + 1) + ' in line.';
  katzDeliLine.push(name);
  return welcome;
}

function nowServing(line) {
  if(line.length == 0)
    return 'There is nobody waiting to be served!'
  var person = line.shift();
  return 'Currently serving ' + person + '.';
}

function currentLine(line) {
  if(line.length == 0)
    return 'The line is currently empty.'
  return line.reduce(function(a,b,i) {
    return a + (i + 1) + '. ' + b + (i == line.length - 1 ? '' : ', ');
  }, 'The line is currently: ')
}
