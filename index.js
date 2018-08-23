function takeANumber(line, name) {
line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
  }
function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {return `Currently serving ${line.splice(0,1)}.`;
}
}
function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    var string = 'The line is currently: ';
    var customer = [];
    for (var i = 0; i < line.length; i++) {
      customer.push(`${i + 1}. ${line[i]}`)
    } return `${string}${customer.join(', ')}`
  }
}
