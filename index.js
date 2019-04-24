
var katzDeli = [];
// Stated at the beginning of the Instructions.The business starts out with an current line = [].
// Then create a function takeANumber
//that accepts two paramaters, current line (katzDeli) and name. The function should return
// a welcome msg (but make sure I say number)
function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}
// Now, build a function nowServing, thats parameter is the deli's current line (katsDeli).
// (or else/ it should) accepts the current line of people and return the first
// person in line, then removing that infividual from the line. - Use .shift
// ex; if the line (katzDeli) is currently serving Ada; it will return statement "Currently
// serving ${katzDeli}" - Same with Grace and Kent. It will return the statement "Currently serving"

// (If) there is no one in line, it should return "There is nobody waiting to be served"

function nowServing(katzDeli) {
// let i = 0;
// while (i < katzDeli.length) {
//   i++;
  if (katzDeli.length === 0) {
  return `There is nobody waiting to be served!`
} else {
  return(`Currently serving ${katzDeli.shift()}.`);
}}

//Build a function `currentLine` that accepts the current
//line of people and returns the current line as a string;
//for example, if 'katzDeliLine' is currently `["Ada", "Grace"]`,
//`currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.
// You don't have to use `katzDeliLine` as a variable or parameter name in your function
//though, it's just an example of a variable that might be passed to it. If there is nobody
// in line, it should return `"The line is currently empty."`


  function currentLine (line) {
    var peopleInLine = [];
  if (line.length === 0) {
  return `The line is currently empty.`
} else {
  for (let i = 0; i < line.length; i++) {
peopleInLine.push(`${i+1}. ${line[i]}`)
   }
return(`The line is currently: ${peopleInLine.join(", ")}`);
}}
