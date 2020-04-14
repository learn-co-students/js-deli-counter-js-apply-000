

function takeANumber(line, personsName) {
  line.push(personsName)
  var placeInLine = line.indexOf(personsName) + 1
  
  return `Welcome, ${personsName}. You are number ${placeInLine} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  let str = "The line is currently: "
  if (line.length === 0) return 'The line is currently empty.'
  
  for(let i = 0; i < line.length; i++)
    str += (`${i+1}. ${line[i]}, `);
    return str.substring(0, str.length - 2);
}
  
