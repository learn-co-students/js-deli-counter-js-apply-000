var katzDeli = []

function takeANumber(katzDeliLine, newCustomerName){
  katzDeliLine.push(newCustomerName)
  // return katzDeliLine
  return `Welcome, ${newCustomerName}. You are number ${katzDeliLine.indexOf(newCustomerName)+1} in line.`
}

function nowServing(katzDeliLine){
  let serving
  if (katzDeliLine.length === 0) return "There is nobody waiting to be served!"
  for (var i=katzDeliLine.length;i>=0;i--) {
     serving = katzDeliLine.shift()
     return `Currently serving ${serving}.`

  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) return `The line is currently empty.`
  var str= `The line is currently:`
    for (var i=0; i<katzDeliLine.length;i++){
    str += ` ${i+1}. ${katzDeliLine[i]}` ;
      if (i < katzDeliLine.length - 1) str += "," ;
    }
  return str
}
