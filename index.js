var katzDeliLine = [];
var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  // for (var i = 0; i < katzDeliLine.length; i++) {
    katzDeliLine.push(name);
  // }
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return 'There is nobody waiting to be served!';
  }
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return 'The line is currently empty.';
  }

  const numbersAndNames = [];

  for (let i = 0, l = katzDeliLine.length; i < l; i++) {
  numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`)
  }

return `The line is currently: ${numbersAndNames.join(', ')}`
}
// takeANumber(katzDeliLine, "Ada");
// takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
// takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."
//
// currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
//
// nowServing(katzDeliLine); // "Currently serving Ada."
//
// currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"
//
// takeANumber(katzDeliLine, "Matz"); // "3"
//
// currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"
//
// nowServing(katzDeliLine); // "Currently serving Grace."
//
// currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
