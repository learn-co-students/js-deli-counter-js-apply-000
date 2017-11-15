

// function takeANumber(katzDeliLine, name){
//   //accept new line of people, katzDeliLine
//   // and their name
//
//   // return their position in line
//   //return NOT by index! return by something else.
// }

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var num = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  var newStr= `The line is currently: `;
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
   newStr += `${i + 1}. ${katzDeliLine[i]}, `
}
  return newStr.slice(0, -2);
}
}
