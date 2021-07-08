// param: the current line, the new customer's name
// returns the customer's position in line
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

// returns the first customer in line or "There is nobody waiting to be served!" if line empty
function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${line.shift()}.`
  }
}

// param: the currentLine
// return "The line is currently empty." or "The line is currently: 1. name 2. name"
function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  }
  else{
    var customers =[]     // store customers in line in correct format
    for (let i = 0; i < line.length; i++){
      customers.push(` ${i + 1}. ${line[i]}`)
    }
    return `The line is currently:${customers}`
  }
}
