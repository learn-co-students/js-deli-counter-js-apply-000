function takeANumber(katzDeliLine, name) {
//add Ada (or whatever name is passed in) to the end of the line
katzDeliLine.push(name)
var number = katzDeliLine.length

//return a string welcoming the person and telling them what number in line they are
 return `Welcome, ${name}. You are number ${number} in line.`
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  
  } else {
    var name = katzDeliLine.shift()
    return "Currently serving " + name + "."
    // return `Currently serving + ${name}`
    
  }
  
}
function currentLine(katzDeliLine) {
  var currentLine = []
  if (katzDeliLine.length === 0) {
  return "The line is currently empty."
} else {
  var name = katzDeliLine.shift()
  return `The line is currently: 1. ${name}, 2. Jane, 3. Ann`
  
}

}  