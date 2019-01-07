var katzDeliLine = [];

function takeANumber (katzDeliLine, name) {
   katzDeliLine.push(name);

  for (var i = 0; i < katzDeliLine.length; i++) {
    if(katzDeliLine.length > 0) {
      return 'Welcome, ' + name + '.' + ' You are number ' + katzDeliLine.length + ' in line.'
    } else {
      return 'Welcome, ' + name + '.' + ' You are number ' + (i + 1) + ' in line.'
    }
  }
}

function nowServing (katzDeliLine) {
  var removed = [];
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  for (var i = 0; i < katzDeliLine.length; i++) {
    var person = katzDeliLine[i];
      removed = katzDeliLine.splice(0, 1);
      return 'Currently serving ' + removed.toString() + '.';
    }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
  var answer = ['The line is currently:'];

  for (var i = 0; i < katzDeliLine.length; i++) {
    var person = katzDeliLine[i];

    if(i === katzDeliLine.length - 1) {
      answer.push((i + 1) + '. ' + person)
    } else {
      answer.push((i + 1) + '. ' + person + ",")
    }
  }

  return answer.join(" ");
}
