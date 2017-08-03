var katzDeli = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
//function takeANumber accepts current line of people ALONG w/names.
//returns their position in line + no index needed
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
} else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}
//function nowServing should return the 1st person in line then REMOVE them.
//if no one return "...nobody waiting to be served"
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.")
} else {
  var i = 0
  while (i < katzDeliLine.length) {
    katzDeliLine[i] = `${i+1}. ${katzDeliLine[i]}` // "The line is currently: 1. Bill 2. Jane 3. Ann"
    i++;
  }
}
    return `The line is currently: ${katzDeliLine.join(", ")}`
}
//if no one return "...currently empty"
