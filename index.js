function takeANumber(lineCurrent, newTicket)
{
  lineCurrent.push(newTicket)
  var message = `Welcome, ${newTicket}. You are number ${lineCurrent.length} in line.`
  return message
}


function nowServing(lineCurrent) {
  
  if (lineCurrent.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var message = `Currently serving ${lineCurrent[0]}.`
    lineCurrent.shift()
    return message
  }
}

function currentLine(line) {
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    var str = "The line is currently: ";
    
    for (var i = 0 ; i < line.length; i++ ){
      str += `${i+1}.` + ` ${line[i]}, `
    }
    
   var cleanStr = str.slice(0,-2)
    return cleanStr
  }
}