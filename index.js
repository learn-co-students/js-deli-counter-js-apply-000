
var katzDeli = [];
// takes in one arguements
// makes a new array
// if the line is empty than it returns a phrase
// have a for loop to go iterate through the array and push matching criteria into the lineNameAndNumber
// if the line is not empty we return a phrase and the name and number of the customer
function currentLine(line){
  var lineNameAndNumber = [];
  if(line.length === 0) {
   return "The line is currently empty.";
  } else {
    for (var i = 0; i < line.length; i++) {
    lineNameAndNumber.push(i + 1 +". " + line[i]);}
    if (line.length !== 0) {
      return "The line is currently: " + lineNameAndNumber.join(', ');
   }
  }
 }

 // Takes one argument, line
 // if the line is empty then it returns a peachy phrase
 // if the line is not empty then we return the phrase plus the customer and their position
 function nowServing(line) {
   if (line.length === 0) {
     return "There is nobody waiting to be served!"
   } else { if (line.length !== 0) {
     return "Currently serving " + line.shift() + ".";
   }
  }
 }


// Takes the two arguements; line & name
// then we push the name to the end of the line
// then we return the phrase interjecting the name and line length which corresponds to where they are on the array or list
 function takeANumber(line, name){
   line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line."
 }
