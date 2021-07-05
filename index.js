

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  //if no one is on the line then return a message;
  if(!line.length) return "There is nobody waiting to be served!";
  //return the first person in line

  // remove that individual from the line
  let individual = line.shift()
  return `Currently serving ${individual}.`
}

function currentLine(line) {
  if(!line.length) return `The line is currently empty.`
  let lineNameAndNums = [];

  for(let i = 0; i < line.length; i++) {
    lineNameAndNums.push(`${i+1}. ${line[i]}`)
  }

  return `The line is currently: ${lineNameAndNums.join(', ')}`
}

var katzDeliLine = [];

console.log(takeANumber(katzDeliLine, "Ada")); // "Welcome, Ada. You are number 1 in line."
console.log(takeANumber(katzDeliLine, "Grace")); // "Welcome, Grace. You are number 2 in line."
console.log(takeANumber(katzDeliLine, "Kent")); // "Welcome, Kent. You are number 3 in line."
console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
console.log(nowServing(katzDeliLine)); // "Currently serving Ada."
console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Grace, 2. Kent"
console.log(takeANumber(katzDeliLine, "Matz")); // "Welcome, Matz. You are number 1 in line."
console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"
console.log(nowServing(katzDeliLine)); // "Currently serving Grace."
console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Kent, 2. Matz"
