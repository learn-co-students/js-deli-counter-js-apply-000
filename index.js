//let deliLine = [];

const takeANumber = (deliLine, newPerson) => {
  deliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${deliLine.length} in line.`
}

const nowServing = (deliLine) => {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    //let nextInLine = deliLine.shift();
    //return `Currently serving ${nextInLine}.`
    return `Currently serving ${deliLine.shift()}.`;
  }
}

const currentLine = (deliLine) => {
  if (deliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    let numberedLine = [];
    for (let i = 0; i < deliLine.length; i++) {
      numberedLine.push(`${i + 1}. ${deliLine[i]}`);
    }
    return `The line is currently: ${numberedLine.join(', ')}`;
  }
}
