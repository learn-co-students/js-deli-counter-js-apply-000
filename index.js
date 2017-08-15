var katzDeliLine = [];

function takeANumber(line, person) {
  line.push(person);
  var position = line.indexOf(person) + 1;
  return "Welcome, " + person + ". You are number " + position + " in line.";
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
  return "Currently serving " + line.shift() + '.';
  }
}

function currentLine(line) {
  var peeps = [];

  for (var i = 0; i < line.length; i++) {
    var person = line[i];
    var place = i + 1 + '.';
    peeps.push(place + " " + person);
  }

  if (line.length > 0) {
    return 'The line is currently: ' + peeps.join(', ');
  } else if (line.length === 0) {
    return 'The line is currently empty.';
  }
}

console.log(currentLine(katzDeliLine));
