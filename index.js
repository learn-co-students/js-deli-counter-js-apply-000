var katzDeliLine = []

function takeANumber (katzDeliLine, nameNewPerson){
  katzDeliLine.push(nameNewPerson)
  return ("Welcome, " + nameNewPerson + ". You are number "+ katzDeliLine.length + " in line.")
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
  else {
    var person1 = katzDeliLine[0]
    katzDeliLine.shift()
    return ("Currently serving " + person1 + ".")
  }
}

function currentLine (katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var currentListArray = []
    for (var i=0; i< katzDeliLine.length; i++){
      currentListArray.push(i+1 + ". " + katzDeliLine[i])
    }
    return ("The line is currently: " + currentListArray.join(", "))
  }
}
