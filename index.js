var katzDeliLine =[]

  function takeANumber(deliLine, newPerson){

deliLine.push(newPerson)

return "Welcome, " + newPerson + ". You are number "+ deliLine.length + " in line."
}
function nowServing(deliLine){

  if(deliLine.length === 0){
  return "There is nobody waiting to be served!"
}else {
  return "Currently serving "+ deliLine.shift() + "."
}
  }
  function currentLine(deliLine){
    if (deliLine.length ===0)
    return "The line is currently empty."
    else {
      var lineEmpty = "The line is currently: "
      for (var i =0; i<=deliLine.length-1; i++){
        lineEmpty +=String(i+1)+ ". "+deliLine[i]+", "
      }
      return lineEmpty.slice(0, lineEmpty.length-2)
      }
    }
