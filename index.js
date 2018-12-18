
var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);

  console.log(`Welcome, ${name}. You are number ${line.length} in line.`)

  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

  /** If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.**/
// takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
// takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
// takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}
// nowServing(katzDeliLine); // "Currently serving Ada."
/**return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"***/

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  }

  var lineOfNameAndNum = [];
  for (var i = 0; i < line.length; i++) {
    let current = line[i];
    lineOfNameAndNum.push(i+1 + '. ' + current);
  }

  return `The line is currently: ${lineOfNameAndNum.join(', ')}`;
}
// currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
