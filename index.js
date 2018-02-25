//empty deli therefore empty array
var katzDeli = []

function takeANumber(katzDeliLine, newCustomer) {
  //add therefore PUSH new customer at the end
  katzDeliLine.push(newCustomer)
  //RETURN the new customer line and notify them of their order
    return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
}
//takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."


//SHIFT = remove first element in array then return removed element
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    // or if (katzDeliLine.length >= 1) or (!katzDeliLine.length)
    return "There is nobody waiting to be served!"
} else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

//return current line in number order
function currentLine(katzDeliLine) {
  let peopleArray = []
  for (var i = 0; i < katzDeliLine.length; i++) {
    //PUSH new customer(s) to the end of current line as long as there is one or more
    peopleArray.push(`${i + 1}. ${katzDeliLine[i]}`)
  }

  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    //alert customers of current line position
    return (`The line is currently: ${peopleArray.join(", ")}`)
  }
}
//currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
//nowServing(katzDeliLine); // "Currently serving Ada."
//currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"
