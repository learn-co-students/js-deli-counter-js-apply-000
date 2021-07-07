var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    var tempName = katzDeliLine[0];
    katzDeliLine.shift()
    return `Currently serving ${tempName}.`
  }
}

function currentLine(katzDeliLine) {
   if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  } else {
    var greeting = "The line is currently: ";
    for(let index = 0; index < katzDeliLine.length; index++) {
      greeting = greeting + (index+1) + ". " + (katzDeliLine[index])
      if (index + 1 < katzDeliLine.length) {
        greeting = greeting + ", "
      }
    }
    
    return greeting;
    
  }
  
}

