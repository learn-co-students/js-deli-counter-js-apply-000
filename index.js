function takeANumber(curLine, person) {
  curLine.push(person);
  return `Welcome, ${person}. You are number ${curLine.length} in line.`;
}

function nowServing(curLine) {
  if(curLine.length > 0) {
    let name = curLine[0];
    curLine.shift();
    return `Currently serving ${name}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(curLine) {
  let copy = curLine.slice(0);
  if(copy.length > 0) {
    for (let i = 0; i < copy.length; i++) {
      let name = copy[i];
      copy[i] = ` ${(i + 1)}. ${name}`;
    }
    return `The line is currently:${copy}`;
  } else {
    return "The line is currently empty.";
  }
}