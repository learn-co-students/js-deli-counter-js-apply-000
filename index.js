function takeANumber(line, name) {
line.push(name);
return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

// function currentLine(nextPerson) {
//   var i = 0;
//   while (i < nextPerson.length) {
//     nextPerson.push(`${i+1} ${nextPerson}, `)
//     i++;
//   }
//   if (nextPerson.length === 0) {
//     return 'The line is currently empty.'
//   } else {
//     return `The line is currently: ${nextPerson}`
//     }
// }

function currentLine(line) {
  
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    var newPeople = [];
  for (var i = 0; i < line.length; i++) {
    newPeople.push(`${i+1}. ${line[i]}`)
  }
    return `The line is currently: ${newPeople.join(', ')}`
    }
}