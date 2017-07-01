var katzDeliLine = [] //variable takes an empty array, will be added to by the function

function takeANumber(katzDeliLine, name) { //function takes 2 parameters - the place in the katzDeliLine array and the person's name
  katzDeliLine.length = katzDeliLine.push(name) //pushes a new name into the katzDeliLine array and assigns the name a place in line
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.` //outputs a statement returning a name and their position in line
};

function nowServing(line) { //function takes one parameter, the array katzDeliLine
  if(!line.length){ // if the line length is 0 (!) the function returns the statement below
    return "There is nobody waiting to be served!"
  }

    return `Currently serving ${line.shift()}.` // otherwise the name in the 0 place called with this statement and is removed from the array

  };

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length){
  return "The line is currently empty."
};
var numbersAndNames = []
for (let i = 0, l = katzDeliLine.length; i < l; i++) {
  numbersAndNames.push(` ${i + 1}. ${katzDeliLine[i]}`)
}
return `The line is currently:${numbersAndNames}`
}
