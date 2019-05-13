
function takeANumber (katzDeli, name) {
  katzDeli.push (name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

//NTS Remember to add the backticks and not general quotes, otherwise the template literals can't connect
// can't find the parameter name in the window so i'm confused that this actually works lol

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return 'There is nobody waiting to be served!'
}
else
  return `Currently serving ${katzDeliLine.shift()}.`
}

//NTS don't use arrays when reffering to numbers cos it thinks it's an index number, not a literal one.


function currentLine(line) {
  if (line.length === 0) {
  return 'The line is currently empty.'
}
else return ('The line is currently: '  + '1. ' + line[0] + ', ' + '2. ' + line[1] + ', ' + '3. ' + line[2])
}

// I did this a completely different way last time but can't remember how. I'm sure I used loops and now I'm wondering which way I did it is wrong... 
