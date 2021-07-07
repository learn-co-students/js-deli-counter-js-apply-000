function takeANumber(curLine,name){
  curLine.push(name);
  return `Welcome, ${name}. You are number ${curLine.length} in line.`
}

function nowServing(katzDeliLine){
      if (katzDeliLine.length === 0){
  return 'There is nobody waiting to be served!'
} else {
  return `Currently serving ${katzDeliLine.shift()}.`
 }
}

function currentLine(curLine){
     if (curLine.length === 0){
  return 'The line is currently empty.'
} else {
  var speak = `The line is currently: `;
  for (var i = 0; i<curLine.length; i++){
      speak += `${i + 1}. ${curLine[i]}`;
    if (i != curLine.length-1)
      speak +=`, `
  }

  return speak;
 }
}
