var katzDeliLine = []
function takeANumber(katzDeliLine, customer){
    var len = katzDeliLine.length
    katzDeliLine.push(customer)
    return `Welcome, ${customer}. You are number ${len+1} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
  else {
    var serving = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.splice(0,1)
    return serving
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "The line is currently empty."
  }
  else {
    var line = "The line is currently: "
    var i = 0
    var len = katzDeliLine.length
    for (;i<len;i++){
      line = line + (i+1)+ ". " + katzDeliLine[i]
      if (i<len-1){
        line = line + ", "
      }
    }
    return line
  }
}
