function takeANumber(KatzDeli, name) {
  KatzDeli.push(name);
  
  return `Welcome, ${name}. You are number ${KatzDeli.length} in line.`
}

function nowServing(KatzDeliLine) {
  if(KatzDeliLine < 1) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${KatzDeliLine.shift()}.`
  }
}


function currentLine(KatzDeliLine) {
  var currentArray= [];
  if(KatzDeliLine < 1) {
    return "The line is currently empty."
  } else {
    for(var i = 0; i < KatzDeliLine.length; i++) {
      currentArray.push(i + 1 + '. ' + KatzDeliLine[i]);
    }
    return `The line is currently: ${currentArray.join(', ')}`
  }
}