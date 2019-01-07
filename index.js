var katzDeli = []
function takeANumber(katzDeliLine, name) {
   katzDeliLine.push(`${name}`)
   return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeli) {
  if(katzDeli.length > 0) {
    return `Currently serving ${katzDeli.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine(line) {
  var array = line
  if(array.length  > 0) {
    for(var i = 0; i < array.length; i++) {
      array[i] = ` ${i+1}. ` + line[i] 
      }
          return "The line is currently:" + array 
}
    else {
        return "The line is currently empty."
      }
    }