function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;

  }

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    let beingserved = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${beingserved}.`
    
  }
  
}


function currentLine(katzDeliLine) {
  var line = []
  for (let i = 0; i < katzDeliLine.length; i++) {
    line.push(` `+[i+1]+`. ` + katzDeliLine[i])
  }
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  } else {
    return `The line is currently:${line}`;
  }
  
}
