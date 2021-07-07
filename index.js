var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === name) {
      return `Welcome, ${name}. You are number ${i + 1} in line.`;
    }
  }
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } 
  else {
    return `Currently serving ${katzDeli.shift()}.`;
  }
}

function currentLine(katzDeli) {
  let counter = 1;
  let line = '';
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
    for(let i=0; i<katzDeli.length; i++) {
       line += `${i+1}. ${katzDeli[i]}`;
       if(counter != katzDeli.length) {
         line += ', ';
       }
       counter += 1;
    }
  }
  return `The line is currently: ${line}`;
}