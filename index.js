
function takeANumber (katzDeli, name) {
  katzDeli.push (name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

//NTS Remember to add the backticks and not general quotes, otherwise the template literals can't connect


function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return 'There is nobody waiting to be served!'
}
else
  return `Currently serving ${katzDeliLine.shift()}.`
}



function currentLine(line) {
  if (line.length === 0) {
  return 'The line is currently empty.'
}
else return ('The line is currently: '  + '1. ' + line[0] + ', ' + '2. ' + line[1] + ', ' + '3. ' + line[2])
}

// I did this a completely different way last time but can't remember how. I'm sure I used loops and now I'm wondering which way I did it is wrong... 
