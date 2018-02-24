function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.indexOf(name) + 1} in line.`
}

function nowServing(array) {
  let message = '`'
  if (array.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    message = `Currently serving ${array[0]}.`
    array.shift();
  }
  return message;
}

function currentLine(line) {
  let peopleInLine = 'The line is currently: '
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
      for (let i = 0; i < line.length; i++) {
        if (i !== line.length - 1){
          peopleInLine += `${i + 1}. ${line[i]}, `
        } else {
            peopleInLine += `${i + 1}. ${line[i]}`
         }
      }
    }
  return peopleInLine;
}
