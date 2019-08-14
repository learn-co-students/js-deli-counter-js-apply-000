function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    let temp = katzDeliLine.shift()
    return `Currently serving ${temp}.`
  }
  return "There is nobody waiting to be served!"
}

function takeANumber (list, name) {
  list.push (name)
  return `Welcome, ${name}. You are number ${list.length} in line.`
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  
  let x = "The line is currently:"
  for(let i = 0; i < katzDeliLine.length; i++) {
    x = `${x} ${i + 1}. ${katzDeliLine[i]}`
    if(i != katzDeliLine.length - 1) {
      x = `${x},`
    }
  }
  return x
}