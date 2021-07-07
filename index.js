function takeANumber(currentLine,newName) {
  currentLine.push(newName)
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`
}
function nowServing(currentLine){
 if (currentLine.length === 0){
   return "There is nobody waiting to be served!"
 }
 var personBeingServed = currentLine[0]
    currentLine.shift()
return `Currently serving ${personBeingServed}.`
}
function currentLine(peopleOnLine){
  if (peopleOnLine.length === 0){
    return "The line is currently empty."
  }
 var line = ""
 
  for ( var i = 0; i < peopleOnLine.length; i++ ){
    line += `${i + 1}. ${peopleOnLine[i]}`
    if ( i < (peopleOnLine.length - 1)){
      
      line += ", "
   }
  }
  return `The line is currently: ${line}`
}