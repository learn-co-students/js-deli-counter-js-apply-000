var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  var currPos
  currPos = katzDeliLine.length
  katzDeliLine[currPos] = name
  return("Welcome, "+name+". You are number "+(currPos+1)+" in line.")
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var currCustomer = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving "+currCustomer+"."
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var baseString = "The line is currently: "
    var i;
    for (i = 0; i < katzDeliLine.length; i++) {
      baseString = baseString + (parseInt(i)+1) + ". " + katzDeliLine[i] +", "
    }
    return baseString.slice(0,-2)
  }
}