Earlier attempts:

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
      //katzDeliLine.shift();
      return `Currently serving ${katzDeliLine[0]}.`;
    }

  katzDeliLine.shift();
}

function nowServing(katzDeliLine) {
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine.length !== 0) {
      katzDeliLine.shift();
      return `Currently serving ${katzDeliLine[i]}.`;
    } else {
        return `There is nobody waiting to be served!`;
      }
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  } else {
      return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`; 
    }
}

//Attempt with do...while loop
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
      let result = [];
      let i = 0;
      
      do {
        result += (i + 1) + '. ' + katzDeliLine[i] + ", ";
      } while (i < katzDeliLine.length);
      result = result.slice(0, result.length-2);
      return 'The line is currently: ' + result;
    }
}
