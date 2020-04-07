
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return 'Currently serving ' + katzDeliLine.shift() + '.'
  } else {
    return 'There is nobody waiting to be served!';
  }
  
}

let curLine = [ ];

function currentLine(katzDeliLine) {
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (i == katzDeliLine.length - 1) {
      curLine += i+1 + '. ' + katzDeliLine[i]; 
    } else {
      curLine += i+1 + '. ' + katzDeliLine[i] + ', '; 
    }
  }
  
  if (katzDeliLine.length <= 0) {
    return 'The line is currently empty.';
  } else {
    return 'The line is currently: ' + curLine;
  }
}
  

