function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  
  for (let i = 0; i < katzDeliLine.length; i++) {
    return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;  
  }
}

function nowServing(katzDeliLine) {
  let firstInLine = katzDeliLine.shift();
  
  for (let i = 0; i < katzDeliLine.length; i++) {
  
    while (katzDeliLine.length !== 0) {
      return `Currently serving ${firstInLine}.`;
    }
  
    katzDeliLine.shift();
  
  }
  
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  }

}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
      let result = [];
      
      for (let i = 0; i < katzDeliLine.length; i++) {
        result += (i + 1) + '. ' + katzDeliLine[i] + ', ';
      }
      result = result.slice(0, result.length-2);
      return 'The line is currently: ' + result;
    }
}

//Attempt with do...while loop
/*function currentLine(katzDeliLine) {
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
}*/
