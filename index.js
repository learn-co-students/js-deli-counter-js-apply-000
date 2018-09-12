function takeANumber(deli, name){
  deli.push(name)
  var number = deli.length
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  var customer = "Currently serving " + katzDeliLine[0] + "."
  katzDeliLine.splice(0, 1)
  return customer
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }
  var statement = "The line is currently: "
  for(var i = 0; i < line.length; i++){
    if(i === line.length - 1){
      statement = statement + (i + 1) + ". " + line[i]
    } else {
    statement = statement + (i + 1) + ". " + line[i] + ", "
    }
  }
  return statement
}