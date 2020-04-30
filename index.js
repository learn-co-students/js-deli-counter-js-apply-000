
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var position = katzDeliLine.length 
  var welcomeMessage = `Welcome, ${name}. You are number ${position} in line.`
  return welcomeMessage
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    var nobodyWaiting = "There is nobody waiting to be served!"
    return nobodyWaiting
  } else {
    var serving = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return katzDeliLine, serving
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    var emptyLine = "The line is currently empty."
    return emptyLine
  } else {
    var lineString = "The line is currently: "
    var i = 0
    while (i < katzDeliLine.length){
      if (i === katzDeliLine.length - 1){
        lineString += `${i + 1}. ${katzDeliLine[i]}`
      i++
      } else {
        lineString += `${i + 1}. ${katzDeliLine[i]}, `
      i++
      }
    }  
    return lineString
  }
}




