function takeANumber(katsDeliLine, newName){
  katsDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katsDeliLine.length} in line.`
}

function nowServing(katsDeliLine){
  var serving = katsDeliLine.shift()
  return serving === undefined ? "There is nobody waiting to be served!":`Currently serving ${serving}.`
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var results ="The line is currently: "
    for(var i = 0; i < katzDeliLine.length - 1; i++){
      var num = i+1
      results = results + num + ". " + katzDeliLine[i] + ", "
    }
    results = results + katzDeliLine.length +". " +katzDeliLine[katzDeliLine.length-1]
    return results
  }else
    return "The line is currently empty."
}