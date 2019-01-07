function takeANumber(katzDeliLine,newName) {
  katzDeliLine.push(newName);
    return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  while (katzDeliLine.length > 1) {
    var katzDeliLine1 = [katzDeliLine[0]];
    katzDeliLine.shift();
  return `Currently serving ${katzDeliLine1[0]}.`
}
  return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty."
  }
  const katzDeliLineNumber = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      katzDeliLineNumber.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently:${katzDeliLineNumber}`
  }
