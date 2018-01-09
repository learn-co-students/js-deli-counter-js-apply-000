function takeANumber(katzDeliLine, newPerson){
  let str = `Welcome, ${newPerson}. You are number ${katzDeliLine.length + 1} in line.`
  katzDeliLine.push(newPerson)
  return str
}

function nowServing(katzDeliLine){
  return katzDeliLine.length === 0 ? "There is nobody waiting to be served!" : `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }else{
    let str = "The line is currently:"
    for(let person of line){
      if(line[line.indexOf(person)] === line[line.length - 1]){
        str += ` ${line.indexOf(person) + 1}. ${person}`
      }else{
        str += ` ${line.indexOf(person) + 1}. ${person},`
      }
    }
    return str
  }
}
