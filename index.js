function takeANumber (current, newPerson) {
  current.push(newPerson)
  var message = `Welcome, ${newPerson}. You are number ${current.length} in line.`
  return message;
}
function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    var message = `Currently serving ${katzDeliLine[0]}.`
  katzDeliLine.shift()
    return message
    
 }
  
}
 function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0){
      return "The line is currently empty."
    }
    else {
      var message = `The line is currently: `
      for (var x = 0; x<katzDeliLine.length; x++) {
           message += `${x+1}. ${katzDeliLine[x]}, `
     }
    
     return message 
    }
 }