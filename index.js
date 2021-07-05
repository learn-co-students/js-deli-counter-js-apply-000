function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
    
function nowServing(katzDeliLine){
  var newkatzDeliLine = []
  if (katzDeliLine.length>0) {
    newkatzDeliLine = katzDeliLine.slice()
    katzDeliLine.shift()
    return `Currently serving ${newkatzDeliLine[0]}.`
    
  }else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var names = ""
  var number = 0
  for (var i = 0; i<katzDeliLine.length; i++) {
    number = i + 1
    names = names + number + ". " + katzDeliLine[i] + ", "
  }
  if (katzDeliLine.length>0) {
    return `The line is currently: ${names.slice(0,names.length-2)}`
  }else {
    return "The line is currently empty."
    }
}