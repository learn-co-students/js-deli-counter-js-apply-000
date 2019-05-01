function takeANumber(deliLine,deliPatron){
  deliLine.push(deliPatron)
  return `Welcome, ${deliPatron}. You are number ${deliLine.length} in line.`
}

function nowServing (deliLine){
  if (deliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    let currentPatron = deliLine.shift()
    return `Currently serving ${currentPatron}.`
  }
}

function currentLine(deliLine){
  let lineStatus = "The line is currently:"
  if (deliLine.length === 0){
    return "The line is currently empty."
  }
  else{
    for (var i = 0; i < deliLine.length;i++){
      if (i === (deliLine.length - 1)){
        lineStatus += ` ${i+1}. ${deliLine[i]}`
      }
      else{
        lineStatus += ` ${i+1}. ${deliLine[i]},`
      }
    }
  return lineStatus
  }
}
