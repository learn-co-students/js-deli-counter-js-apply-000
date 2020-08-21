var katzDeliLine = []


function takeANumber (katzDeliLine, currentName) {
  katzDeliLine.push(currentName);
  return `Welcome, ${currentName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    const removedName = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${removedName}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    let stringLine = `The line is currently:`
      for (let i = 0; i < katzDeliLine.length; i++) {
        stringLine += ` ${i+1}. ${katzDeliLine[i]},`
      }
    return stringLine.substring(0, stringLine.length - 1);

  } else {
    return "The line is currently empty."
  }
  
}
