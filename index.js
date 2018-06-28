// At the beginning of the day & the deli is empty:
var katzDeli = [];

// The current line of people:
var katzDeliLine = [];

// Build a function that a new customer will use when entering the deli. The function, takeANumber, should accept the current line of people, katzDeliLine, along with the new person's name as parameters. The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

function takeANumber (linepos, name) {
    linepos.push(name)
    return `Welcome, ${name}. You are number ${linepos.length} in line.`
    
    
}

//Build a function nowServing. This function should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"
function nowServing (linepos, name) {
    if (linepos.length > 0) {
      return `Currently serving ${linepos[0]}.`
      linepos.shift();    
if (linepos.length === 0) {
  return 'There is nobody waiting to be served!' }
}
}

//Build a function currentLine that returns the current line. For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace". If there is nobody in line, it should return "The line is currently empty."

function currentLine (linepos) {
  for (var i = 0; i < linepos.length; i++) {
  var list = 1;
    return `The line is currently: ${list++}. ${linepos[i]},`}
}
    else {
        return `The line is currently empty.` }