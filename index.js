function takeANumber(katzDeliLine, customerName){
  katzDeliLine.push(customerName)
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var currCustomer = katzDeliLine.shift()
    return `Currently serving ${currCustomer}.`
  }
}

function currentLine(katzDeliLine){
  var i
  if(katzDeliLine.length > 0){
    var string = "The line is currently: "
    for(i=0; i<katzDeliLine.length; i++){
      string += `${i+1}. ${katzDeliLine[i]}, `
    }
    string = string.slice(0, -2)
  }
  else{
    string = 'The line is currently empty.'
  }
  return string
}