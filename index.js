/*
* The "takeANumber()" function accepts two parameterr:
* 1) current line of people
* 2) the new person's name
* Return a welcome message incl. new person's position in line
*/

function takeANumber(line, name) {
  // appending a person to the end of the current line
  line.push(name)
  var message = `Welcome, ${name}. You are number ${line.length} in line.`
  return message
}

takeANumber(["Bill", "Jane"], ["Ann"])

console.log(takeANumber(["Bill", "Jane"], ["Ann"]))

/*
* The "nowServing()" function accepts the current line of people
* Returns "Currently serving "the first person in line"" 
* and removes the individual from the line
* If there is no person left in line return 
* "There is nobody waiting to be served!"
*/

function nowServing(line) {
  if(line.length > 0) {
    var currentlyServing = `Currently serving ${line[0]}.`
    // .shift() – removes the first person in line
    line.shift()
    return currentlyServing
  } else {
    var emptyLine = "There is nobody waiting to be served!"
    return emptyLine
  }
}


nowServing(["Bill", "Jane", "Ann"])

console.log(nowServing(["Bill", "Jane", "Ann"]))

/*
 * The "currentLine()" function accepts the current
 * line of people and returns the current line
 * as a string (e.g. "The line is currently: 1. Ada, 
 * 2. Grace"). If there is nobody in the line,
 * return "The line is currently empty."
*/

function currentLine(line) {
 if(line.length === 0) {
  var emptyLine = "The line is currently empty."
  return emptyLine
  } else {
   for(var i = 0; i < line.length; i++) {
     // array[i] = "#" + array[i] – adds text to the beginning of each element
    line[i] = [i + 1] + ". " + line[i]
    // join() - adds text to the end of each element in an array
    var lineMessage = "The line is currently: " + line.join(", ")
  } 
 }
  return lineMessage
}

currentLine(["Bill", "Jane", "Ann"])

console.log(currentLine(["Bill", "Jane", "Ann"]))

