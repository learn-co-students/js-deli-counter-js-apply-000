

function takeANumber(line, person){
  line.push(person)
  return (`Welcome, ${person}. You are number ${line.length} in line.`)
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!";
  } else {
    return (`Currently serving ${line.shift()}.`);
  }
}

function currentLine(line) {
let foo = [];
for (let i = 0; i < line.length; i ++) {
  foo.push((`${i+1}. ${line[i]}`));
}
  if (!line.length) {
    return (`The line is currently empty.`)
  } else {
    return (`The line is currently: ${foo.join(', ')}`);
  }
}
