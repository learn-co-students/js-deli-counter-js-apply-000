var personInLine = [];

var takeANumber = (personInLine, name) => {
  personInLine.push(name);
  return `Welcome, ${name}. You are number ${personInLine.length} in line.`;
}

// function takeANumber(personInLine, name) {
//   personInLine.push(name);
//   return `Welcome, ${name}. You are number ${personInLine.length} in line.`;
// }

var nowServing = personInLine => {
  if (personInLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + personInLine.shift(name) + ".";
  }
}

// function nowServing(personInLine) {
//   if (personInLine.length === 0) {
//     return 'There is nobody waiting to be served!';
//   }
//   return 'Currently serving ' + personInLine.shift(name) + '.';
// }

var currentLine = personInLine => {
  if (personInLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var customerNumber = [];
    for (var i = 0; i < personInLine.length; i++) {
      customerNumber.push(`${[i + 1]}. ${personInLine[i]}`);
    }
    return `The line is currently: ${customerNumber.join(', ')}`;
  }
}

// function currentLine(personInLine) {
//   if (personInLine.length === 0) {
//     return 'The line is currently empty.';
//   }
//   var customerNumber = [];
//   for(var i = 0; i < personInLine.length; i++) {
//     customerNumber.push(`${[i + 1]}. ${personInLine[i]}`);
//   }
//   return `The line is currently: ${customerNumber.join(', ')}`;
// }
