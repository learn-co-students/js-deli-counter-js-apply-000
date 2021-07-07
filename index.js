
var katzDeli = [];
// takes in one arguements
// makes a new array
// if the line is empty than it returns a phrase
// have a for loop to go iterate through the array and push matching criteria into the lineNameAndNumber
// if the line is not empty we return a phrase and the name and number of the customer
function currentLine(line){
  var lineNameAndNumber = []; // Empty array to store my new stuff
  if(line.length === 0) {

   return "The line is currently empty.";
  } else {   // expect (currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    for (var i = 0; i < line.length; i++) { //Iterate through the array, for the entire length of the array i < line.length is our condition
     lineNameAndNumber.push(i + 1 +". " + line[i]);} // Final condition that is done after every loop - Whatever element of the array you are going to add 1(to it's positon so 0 = 1, 1 = 2, etc..) and a '. ' + the rest of the array
    if (line.length !== 0) { // ^ This adds it into my new array
      return "The line is currently: " + lineNameAndNumber.join(', '); // If the line is not empty add text + the new array(but converted into a string via the join method)
   }
  }
 }

 // Takes one argument, line
 // if the line is empty then it returns a peachy phrase
 // if the line is not empty then we return the phrase plus the customer and their position
 function nowServing(line) {
   if (line.length === 0) { // If the line is 0 then return
     return "There is nobody waiting to be served!"
   } else { if (line.length !== 0) { // If the line is not 0 then return the currently serving
     return "Currently serving " + line.shift() + "."; //Shift removes the first item from the array // So if my line is [Dan, Jamie, Ada] it takes Dan (the first index) and says he is being served
   }
  }
 }

// takeANumber(katzDeli, 'Ada');
// Takes the two arguements; line & name
// then we push the name to the end of the line
// then we return the phrase interjecting the name and line length which corresponds to where they are on the array or list
 function takeANumber(line, name){
   line.push(name); //Adds a new item to the array (at the end)
  return "Welcome, " + name + ". You are number " + line.length + " in line." // Returns Text + the Variable name // takeANumber(katzDeli, 'Ada'); adds Ada to the current line and her position in the array
 }
