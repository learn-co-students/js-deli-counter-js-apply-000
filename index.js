function takeANumber(lineArray, newName) {
  let result = '';
  lineArray.push(newName);
  result += `Welcome, ${newName}. You are number ${lineArray.length} in line.`
  return result;
}

function nowServing(katzDeliLine) {
  let result = '';
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    result = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine = katzDeliLine.splice(0, 1);
  }
  return result;
}

function currentLine(lineOfPeople) {
  let result = 'The line is currently: ';
  if (lineOfPeople.length === 0) {
    return 'The line is currently empty.';
  } else {
    for (let i = 0; i < lineOfPeople.length; i++) {
      const currentPerson = lineOfPeople[i];
      result += `${i + 1}. ${currentPerson}, `;
    }
  }
  return result.slice(0, result.length - 2);
}


