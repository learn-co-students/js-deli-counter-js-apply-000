function takeANumber (katzDeliLine, name) {
    katzDeliLine.push(name); //adding the name to the deli line array
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.` //using .length to give the position in line starting with 1, rather than zero
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) { //in the case of an empty line
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeliLine.shift()}.` //.shift returns the element that was deleted from the beginning of the array, so I can combine steps here
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) { //again, in the case of an empty line. I'm repeating essentially the same logic though as the previous function, is there a more concise way?
    return "The line is currently empty."
  }

  var whoseInLine = [] //creating an empty array to drop the new elements into

  for (var i = 0; i < katzDeliLine.length; i++) { //looping the deli line
    whoseInLine.push(`${i + 1}. ${katzDeliLine[i]}`) //adding strings to the new array. I'm adding 1 to the index so its legible, adding a period and a space, and then adding the specific name
  }
  return `The line is currently: ${whoseInLine.join(", ")}` //joining the new array with a comma and a space to make it return legibly
}
