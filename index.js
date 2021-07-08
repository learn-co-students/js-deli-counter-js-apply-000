var katzDeli = [];
function takeANumber(katzDeliLine, newName){
    var position = katzDeliLine.length + 1
    katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var nextPerson = katzDeliLine.shift()
    return `Currently serving ${nextPerson}.`
  } else if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if (!katzDeliLine.length) {
    return "The line is currently empty."
  }

  const numbersWithNames = []

  for (let i = 0, l = katzDeliLine.length; i < l; i++){
    numbersWithNames.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${numbersWithNames.join(', ')}`
}
