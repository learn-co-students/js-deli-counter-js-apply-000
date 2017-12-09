var katzDeli = [];

function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    const firstPerson = katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  let string = "The line is currently: "
  if (katzDeliLine.length === 0){
     return "The line is currently empty."
  } else{
    for(let i=0; i<katzDeliLine.length; i++){
      const add = (i+1) === katzDeliLine.length ? "" : ", "
      string = string + `${i+1}. ${katzDeliLine[i]}` + add
    }
  }
  return string
}
