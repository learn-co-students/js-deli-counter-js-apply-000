function takeANumber(line, person) {
  return `Welcome, ${person}. You are number ${line+1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return katzDeliLine.shift()
  }
}

function currentLine(katzDeliLine) {
  string = "The line is currently: "
  if (katzDeliLine.length === 0){
    return `The linee is currently empty.`
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      string += `${i+1}. ${katzDeliLine[i]},`
    }
  }
  return string
}





