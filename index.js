

var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  let lastPerson = katzDeliLine.slice(-1)[0];
return `Welcome, ${lastPerson}. You are number ${katzDeliLine.length} in line.`;
}



function nowServing(katzDeliLine){
  if( katzDeliLine && katzDeliLine.length){
    return `Currently serving ${katzDeliLine.shift()}.`
  } else{
    return `There is nobody waiting to be served!`
  }
}

function currentLine(katzDeliLine, name){
  if( katzDeliLine && katzDeliLine.length){
    let lineNames = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
    lineNames.push( `${i + 1}. ${katzDeliLine[i]}`);
}
    return `The line is currently: ${lineNames.join(', ')}`
  } else{
    return `The line is currently empty.`
  }
  }
