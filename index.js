//takes a line and a new person, returns "Welcome, {name}, you are number {index + 1} in line"
const takeANumber = (line, person) => {
  //the person's position in line
  const position = line.length + 1
  
  //adds the person to the line
  line.push(person)
  
  //returns a greeting
  return `Welcome, ${person}. You are number ${position} in line.`  
}

//takes a line and returns the first person in line.  If line is 0, return "There is nobody waiting to be served!"
const nowServing = (line) => {
  return line.length ? 
  "Currently serving " + line.shift() + "." : 
  "There is nobody waiting to be served!"
}

//takes a line, returns the line in the format "The line is currently: {position}. {name}, ..."
const currentLine = (line) => {
  let arr = []
  line.forEach((person, index) => {
    arr.push(` ${index + 1}. ${person}`)
  })
  return arr.length ? 
  "The line is currently:" + arr.join(",") :
  "The line is currently empty."
}