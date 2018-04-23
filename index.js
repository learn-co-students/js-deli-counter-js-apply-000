//creates empty array to be used later to store names of people in line with their number preceeding 
var line = [];
//create empty array to store names of people in line
var katzDeliLine = [];
//create counter variable to be used later
let i = 0; 

//function accepts current line of people and name of new person on line
function takeANumber(katzDeliLine, name){
 //add new name to the end of katzDeliLine array that stores names of people on line
 katzDeliLine.push(name)
  //return a string that welcomes new customer and informs them of their position on the line
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  //checks if there is no one on line, if true prints string
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  //if there are 1 or more people on line
  else {
    //creates string that states that the person who is first on line is currently being served
    var p =  `Currently serving ${katzDeliLine[i]}.`
    //removes the person being served from the front of the line
    katzDeliLine.shift()
    //return the "Currently serving X" statement
    return p;
  }
    
}

function currentLine(katzDeliLine){
  //if there is no one on line return string that states its empty
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  //if there are people on line
  else {
   //adds the first person on line to the array with their line number in front
   line.push(`${i+1}. ${katzDeliLine[i]}`)
   //repeats this process to add all additional people on line to the end of the array
   //neccessary to maintain the format 1. name 2. name ... with proper spacing 
   for (let i = 1; i < katzDeliLine.length; i++) {
  //adds new person to end of line array 
  line.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
  //returns numbered list of people on line
  return `The line is currently: ${line}`
  }
}

