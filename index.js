//1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept the current line of people, `katzDeliLine`, along with the new person's name as parameters. The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

// whats my input? A current line of people and a name to add
// whats my output? returning a position in line

//create skeleton function
//add two parameters
//add user input (name) to the line
//do length instead of index 
// return a statement

//2. Build a function `nowServing`. This function should return the first person in line and then remove that individual from the lineIf there is nobody in line, it should return "There is nobody waiting to be served!"
// whats my input? the line
// whats my output? the first person or nobody

//create skeleton function
//add 1 parameters
//handle if there is no one in line
//handle else statement that returns person and removes.(shift())?

//3. Build a function `currentLine` that returns the current line. For example, if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  If there is nobody in line, it should return `"The line is currently empty."`
// whats my input? the line
// whats my output?  either empty or the current line
//create skeleton and add one parameter
//first handle (if) no one is in line
//next handle looping through the line to get the Names
//figure out how to get number and name 
//return the new array with new message 


let katzDeliLine=[];

function takeANumber(katzDeliLine, name) {
   katzDeliLine.push(name)
   return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
 }

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    let currentLineTwo= [];
     for(let i=0; i<katzDeliLine.length; i++) {
     currentLineTwo.push(`${i+1}. ${katzDeliLine[i]}`) 
     
  }
    console.log(currentLineTwo)
   return `The line is currently: ${currentLineTwo.join(", ")}`
  }

}