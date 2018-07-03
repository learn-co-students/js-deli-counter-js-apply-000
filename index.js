// At the beginning of the day & the deli is empty:
var katzDeli = [];
var katzDeliLine = [''];
// The current line of people:
// var katzDeliLine = ['Albert', 'Beatrice', 'Candy'];

// Build a function that a new customer will use when entering the deli. The function, takeANumber, should accept the current line of people, katzDeliLine, along with the new person's name as parameters. The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.
function takeANumber(line, name) {
    line.push(name);
    return `Welcome, ${name}. You are number ${line.length} in line. \n`;
}

//Build a function nowServing. This function should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"
function nowServing (line) {
    if (line.length > 0) {
      return `Currently serving ${line.shift()}.`
    } 
    if (line.length === 0) {
        return 'There is nobody waiting to be served!' 
    }
}

//Build a function currentLine that returns the current line. For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace". If there is nobody in line, it should return "The line is currently empty."
function currentLine (line) {
    let numberedLines = [];
  for (i = 0; i !== line.length; i++) {
    numberedLines.push(`${i+1}. ${line[i]}`);
    } 
return `The line is currently: ${numberedLines.join(', ')}.`
    if (line.length === 0) {
        return `The line is currently empty.` 
    }
} 



/* 

An alternative way to build currentLine:

function currentLine(line) {
if (!line.length) {
    return "The line is currently empty."
}
const numbersAndNames = []
for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
}
return `The line is currently: ${numbersAndNames.join(', ')}`;
} 



Testie Testie

console.log(takeANumber(katzDeliLine, 'Declan'))
console.log(nowServing(katzDeliLine))
console.log(currentLine(katzDeliLine))
console.log(nowServing(katzDeliLine))
console.log(currentLine(katzDeliLine))

*/