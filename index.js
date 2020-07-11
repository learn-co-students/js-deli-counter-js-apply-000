function takeANumber(deli, name) {
  deli.push(name);
  return 'Welcome, ' + name + '. You are number ' + deli.length + ' in line.';
}

function nowServing(deliLine) {
  if(deliLine.length === 0){
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + deliLine.shift() + '.';
  }
  return deliLine;
}

function currentLine(customers) {
  if(customers.length === 0) {
    return 'The line is currently empty.';
  } else {
    let lineList = 'The line is currently: ';
    let n = 1;
    
    for(let i=0; i<customers.length; i++) {
      if (i === 0) {
        lineList = lineList + n++ + '. ' + customers[i];
      } else {
        lineList = lineList + ', ' + n++ + '. ' + customers[i];
      }
    }
    
    return lineList;
  }
}