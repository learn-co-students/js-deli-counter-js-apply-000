const takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name)
  
  var currentPosition = katzDeliLine.indexOf(name) + 1

  var welcomeMessage = `Welcome, ${name}. You are number ${currentPosition} in line.`

  return welcomeMessage
};

const nowServing = (katzDeliLine) => {
  var firstPerson = katzDeliLine[0] === undefined ? "There is nobody waiting to be served!" : `Currently serving ${katzDeliLine[0]}.`
  // Note that the primary instructions don't include the "Currently serving text, though the tests do include it"
  
  katzDeliLine.shift()  //Remove the first individual from the line
  
  return firstPerson
}

const currentLine = (katzDeliLine) => {
  if (katzDeliLine[0] === undefined) return "The line is currently empty." 
  
  var lastIndex = katzDeliLine.length - 1
  
  var outputString = "The line is currently:"
  
  katzDeliLine.map((name, i) => outputString += ` ${i + 1}. ${name}${i === lastIndex ? '' : ','}`)
  
  return outputString
}