function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person)
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }

}



function currentLine(line) {
  var greeting = "The line is currently: ";
  if (line.length < 1){
  return "The line is currently empty."
  } else {
    for (var i =0; i <= line.length - 2; i++)
    greeting += `${i+1}. ${line[i]}, `
    if (i === line.length - 1){
      greeting += `${i+1}. ${line[i]}`
    }
  }
  return greeting
}
