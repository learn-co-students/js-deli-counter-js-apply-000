function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

// Since the deli is empty, Ada is first in line.
// Since there are already people in line, Grace is number 4 in line.
// Multiple people have been added to the line and they are given their number in line as they are queued up. 

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) 
  return "There is nobody waiting to be served!"
  else 
  return `Currently serving ${katzDeliLine.shift()}.`
}

// Since the line is empty, the program returns "There is nobody waiting to be served!"
// However, if someone is in line, the program will say 'Currently serving [person in line]' and will shift the line

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) 
  return "The line is currently empty."
 // If no one is line, the program will say "The line is currently empty"
  else
  var line = []
// Assign variable an empty array
  for (var i = 0; i < katzDeliLine.length; i++)  
//  is set to equal to 1; as long as i is less than the less than the deli line length, exceute the code below which will print 1. name 2. name...
 line.push(`${i+1}. ${katzDeliLine[i]}`)  
// Above line pushes 1., 2., 3. onto the array, followed by the name of the people in line. 
  return `The line is currently: ${line.join(", ")}`
// Above line returns 'The line is currently: 1. name, 2. name, 3. name
}

// Outputs 'The line is currently: 1. Bill, 2. Jane, 3. Ann 