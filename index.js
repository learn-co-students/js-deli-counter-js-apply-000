function takeANumber(array, person) {
  array.push(person);
  return 'Welcome, ' + person + '. You are number ' + array.length + ' in line.';
}

function nowServing(array) {
  if (array.length < 1) {
    return 'There is nobody waiting to be served!';
  } else {
    var message = 'Currently serving ' + array[0] + '.';
    array.shift();
    return message;
  }
}

function currentLine(array) {
  var lineString = 'The line is currently: ';
  if (array.length < 1) {
    return 'The line is currently empty.';
  } else {
    for (var i = 0; i < array.length - 1; i++) {
      lineString += ((i + 1) + '. ' + array[i] + ', ');
    }
    lineString += (array.length + '. ' + array[array.length - 1]);
  }
  return lineString;
}