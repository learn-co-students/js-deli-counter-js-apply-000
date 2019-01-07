function nowServing(line) { //nowServing function gets the first person in line and then removes them from the line. Also gives a message if nobody is in line.
  if (!line.length) { //Anybody in line?
    return "There is nobody waiting to be served!" //Nobody is in line!
  }
  return `Currently serving ${line.shift()}.` //People are in line. Returns "Currently serving" with and the correct person
};
function currentLine(line) { //currentLine function shows who all is in line at the moment
  if (!line.length) { //Is the line empty?
    return "The line is currently empty." //Generic empty line statement
  }
  const numbersAndNames = [] //empty array for storage
  for (let i = 0, l = line.length; i < l; i++) { //Loop to get a list of everyone that's currently in line. Had a lot of trouble with the exact syntax and referenced the solution code. Am rusty with Javascript.
    numbersAndNames.push(`${i + 1}. ${line[i]}`) //Set the correct line order
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`//Return the names and line position of everyone currently in line
};
function takeANumber(line, name) { //takeANumber function, returns the person's number in line
  line.push(name) //Push the name
  return `Welcome, ${name}. You are number ${line.length} in line.` //State the person's name and their current position in line
};