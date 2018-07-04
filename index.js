function takeANumber(KatzDeliLine, name){
  KatzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${KatzDeliLine.length} in line.`
}

function nowServing(DeliLine){
  if (DeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${DeliLine.shift()}.`
  }
}

function currentLine(DeliLine){
  if (DeliLine.length === 0){
    return "The line is currently empty."
  } else {
    var linenumber = `1. ${[DeliLine[0]]},`
    for (let i = 1; i < DeliLine.length -1; i++){
    linenumber =`${linenumber} ${i + 1}. ${DeliLine[i]},`
    }
    linenumber = `${linenumber} ${DeliLine.length}. ${DeliLine[DeliLine.length - 1]}`
    return `The line is currently: ${linenumber}`
  }
}