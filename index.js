function nowServing(currentLine){
  if(currentLine.length == 0)  {
    return "There is nobody waiting to be served!"
  } else {
    var currentCustomer = currentLine[0]
    currentLine.splice(0,1)
    return "Currently serving " + currentCustomer + "."
  }
}
function takeANumber(currentLine, person){
  var katzDeli = currentLine
  katzDeli.push(person)
  return "Welcome, " + person + ". You are number " + (katzDeli.indexOf(person) + 1) + " in line."
}
function currentLine(inputLine){
  var returnString
  if(inputLine.length > 0){
  returnString = "The line is currently: "
  for(var i = 0; i<inputLine.length; i++){
    returnString = returnString + (i+1) + ". " + inputLine[i]

    if(i != inputLine.length - 1){
      returnString = returnString + ", "
    }

  }
} else {
  returnString = "The line is currently empty."
}
  return returnString
}
