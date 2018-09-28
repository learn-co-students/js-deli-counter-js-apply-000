function takeANumber(line, name) {
  let welcomeMessage = '';
  line.push(name);
  const numberInLine = line.length;
    welcomeMessage += `Welcome, ${name}. You are number ${numberInLine} in line.`
  return welcomeMessage;
}

function nowServing(katzDeliLine) {
  let nextUp = '';
  if (katzDeliLine.length === 0) {
      nextUp = "There is nobody waiting to be served!";
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      const currentPerson = katzDeliLine[i];
      nextUp = `Currently serving ${currentPerson}.`
      katzDeliLine = katzDeliLine.splice(0, 1);
    }
  } 
  return nextUp;
}

function currentLine(line) {
  let theLine = 'The line is currently: ';
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    for (let i = 0; i < line.length; i++) {
      const currentPerson = line[i];
      if (i === line.length - 1) {
        theLine += `${(i + 1)}. ${currentPerson}`;
      } else {
        theLine += `${(i + 1)}. ${currentPerson}, `;
      }
    }
  }
  return theLine;
}

