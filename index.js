function takeANumber (line, name) {
  line.push(name);

  return (`Welcome, ${name}. You are number ${line.length} in line.`);
};
function nowServing(line){
  if (line <= 0){
    return ('There is nobody waiting to be served!');
  } else {
    return (`Currently serving ${line.shift()}.`);
    };
};
function currentLine (line) {
  let deliLine = [];
  let waitString = "The line is currently: ";
  if (line.length <= 0) {
    return ("The line is currently empty.");
  } else {
    for (let i = 0; i < line.length; i++) {
      deliLine[i] = (`${[i+1]}. ${line[i]}`);
    };
    waitString += deliLine.join(', ');
    return waitString;
  };
};
