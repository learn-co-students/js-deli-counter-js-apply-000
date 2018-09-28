function takeANumber(arrOfPeople, newPerson) {
  let welcomeMessage = '';
  arrOfPeople.push(newPerson);
  welcomeMessage = `Welcome, ${newPerson}. You are number ${arrOfPeople.length} in line.`;
  return welcomeMessage;
}

function nowServing(katzDeliLine) {
  let announcement = '';
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      const currentPerson = katzDeliLine[i];
      announcement = `Currently serving ${katzDeliLine[0]}.`;
      katzDeliLine = katzDeliLine.splice(0, 1);
    }
  }
  return announcement;
}

function currentLine(line) {
  let nextUp = 'The line is currently: ';
  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
    for (let i = 0; i < line.length; i++) {
      const currentPerson = line[i];
      if (i === line.length - 1) {
        nextUp += `${i + 1}. ${currentPerson}`;
      } else {
        nextUp += `${i + 1}. ${currentPerson}, `;
      }
    }
  }
  return nextUp;
}  

