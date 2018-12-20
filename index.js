function takeANumber(line, newPerson) {
  line.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (!line.length) {
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + line.shift() + ".";
  }
}

function currentLine(line) {
  const arr = [];
  
  if (!line.length) {
    return 'The line is currently empty.';
  } else {
    for (let i = 0; i < line.length; i++){
      arr.push(`${i + 1}. ${line[i]}`)
    }
    return `The line is currently: ${arr.join(', ')}`;
  }
}
