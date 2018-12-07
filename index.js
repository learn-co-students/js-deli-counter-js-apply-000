
function takeANumber(katzDeliLine, newPersonName) {
    katzDeliLine.push(newPersonName)
    return `Welcome, ${newPersonName}. You are number ${katzDeliLine.length} in line.`
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
   return "There is nobody waiting to be served!"
  }
}



function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var current = ""
    for (var i = 0; i < katzDeliLine.length; i++) {
       current = `${current}` + `${i+1}` + ". " + `${katzDeliLine[i]}` + ", "
    }
    return "The line is currently: " + current.slice(0, -2) 
  }
  else {
      return "The line is currently empty."
  }
}
 