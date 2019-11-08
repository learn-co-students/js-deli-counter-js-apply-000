function takeANumber (katzDeliLine, newName) {
  let firtPerson = `Welcome, ${newName}. You are number 1 in line.`;
  let theRest = `Welcome, ${newName}. You are number ${katzDeliLine.length + 1} in line.`
  if (katzDeliLine.length === 0) {
    katzDeliLine.push(newName)
    return firtPerson;
  } else {
    katzDeliLine.push(newName)
    return theRest;
  }
}

let ticketNo = 0;
function takeANumber(katzDeliLine) {
  ticketNo++
  katzDeliLine.push(ticketNo);
  return `Welcome, you have ticket number ${ticketNo}.`;
}


function nowServing(katzDeliLine) {
  let served = ""
  if (katzDeliLine.length !== 0) {
    served += katzDeliLine.shift(katzDeliLine)
    return `Currently serving ${served}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

// if (line.length !== 0) {
//     for (let i = 0; i < line.length; i++) {
//       output.push(`${i + 1}. ${line[i]})`
//     }
//     return message + output;
//   } else {
//     return "The line is currently empty."
//   }

function currentLine(line) {
  let message = "The line is currently: "

  let i = 0;
  do{
      message += `${i + 1}. ${line[i]}, `
      i++
    }
    while (i < line.length)
  let output = message
  if (line.length) {
    return output.slice(0, output.length - 2)
  } else {
    return "The line is currently empty."
  }
  
}