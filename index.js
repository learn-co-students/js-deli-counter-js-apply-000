var katzDeliLine = [] //variable takes an empty array, as the below function iterates elements will be added to it

function takeANumber(katzDeliLine, name) { //function takes 2 parameters - the place in the katzDeliLine array and the person's name
  katzDeliLine.push(name); //pushes a new name onto the end of the  katzDeliLine array and assigns the name an index
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.` //outputs a statement returning a name and their position in line
};                                                                           // based on the length of the list, not the index

function nowServing(katzDeliLine, name) {
  if(!katzDeliLine.length){ // if the line length is 0 (!) the function returns the statement below
    return "There is nobody waiting to be served!"
  }
  else{
  return `Currently serving ${katzDeliLine.shift(0)}.`; // otherwise the name in the 0 index place is destructively called with this statement
  }
}

function currentLine(katzDeliLine) { // this function takes the one paramater, but requires multiple steps
  if (!katzDeliLine.length){ // if there is no one on line (array has 0(!) people in it) the statement below returns
  return "The line is currently empty."
};
var listFormat = [] // in order to get the array list to output in the desired format a new variable is created and used in a for loop
for (var i = 0, l = katzDeliLine.length; i < l; i++) {
  listFormat.push(` ${i + 1}. ${katzDeliLine[i]}`) // the new variable represents a push of a physical number next to the name in the array
}                                                       //so I used i + 1 on each loop, then  period and a space and then the person's name in line who is
return `The line is currently:${listFormat}`       //represented by that loop's position in the array. so if  i = 0, the number 1 will come up,
}                                                       //but the person in 0 place (Bill) will be printed next to it.
