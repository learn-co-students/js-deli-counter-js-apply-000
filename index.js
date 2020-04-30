function takeANumber(anyLine, newCustName) {
  anyLine.push(newCustName);
  return `Welcome, ${newCustName}. You are number ${anyLine.length} in line.`;
}


function nowServing(anyLine) {
  if (anyLine.length === 0) {
  return 'There is nobody waiting to be served!';
  } else {
    let firstBloke = anyLine.shift();
    return `Currently serving ${firstBloke}.`;
  }
}


function currentLine(anyLine) {
  if (anyLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    let numberedLine = [];
    for (let i = 0; i < anyLine.length; i++) {
      numberedLine.push(' ' + parseInt(i+1) + '. ' + anyLine[i]);
    } return `The line is currently:${numberedLine}`;
  }
}
