var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  return "Welcome, " + name + ". You are number " + katzDeliLine.push(name) + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  return "Currently serving " + katzDeliLine.shift() + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var i = 0
  var whyNoWork = ""
  var j = 1
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }

  while (i < katzDeliLine.length) {
    // whyNoWork += j + ". "
    whyNoWork += j + ". " + katzDeliLine[i]
    if (i < (katzDeliLine.length - 1)) {
      whyNoWork += ", "
    }
    i++
    j++
  }
  return "The line is currently: " + whyNoWork


  /*do {
    console.log("test")
    return "The line is currently: " + (j + 1) + ". " + katzDeliLine + " "
    i++
  }
  while ((katzDeliLine.length != 0) && (i <= katzDeliLine.length))*/
}

console.log(takeANumber(katzDeliLine, "Ada")); // "Welcome, Ada. You are number 1 in line."
console.log(takeANumber(katzDeliLine, "Grace")); // "Welcome, Grace. You are number 2 in line."
console.log(takeANumber(katzDeliLine, "Kent")); // "Welcome, Kent. You are number 3 in line."

console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

console.log(nowServing(katzDeliLine)); // "Currently serving Ada."

console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Grace, 2. Kent"

console.log(takeANumber(katzDeliLine, "Matz")); // "3"

console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

console.log(nowServing(katzDeliLine)); // "Currently serving Grace."

console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Kent, 2. Matz"
