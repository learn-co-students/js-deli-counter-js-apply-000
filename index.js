function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length===0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var name = katzDeliLine.slice(0,1)
    katzDeliLine.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length ===0) {
    return "The line is currently empty."
  }
  else {
    var numberAndLine = [];
    for(var i=0; i<katzDeliLine.length; i++) {
      numberAndLine[i] = `${i+1}. ${katzDeliLine[i]}` 
    }
    return `The line is currently: ${numberAndLine.join(`, `)}`
  }
}

