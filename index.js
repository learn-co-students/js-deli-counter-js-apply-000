function takeANumber(variable, newName) {
  variable.push(newName);
  return `Welcome, ${newName}. You are number ${variable.length} in line.`;
}

function nowServing(variable) {
  var deliWords = []; 
  if (variable.length === 0) {
    deliWords = "There is nobody waiting to be served!";
  } else {
    deliWords = `Currently serving ${variable[0]}.`; 
    variable.shift();
  }
  return deliWords
}
 

//Create a function that takes a variable as an argument and returns an array 
 /* function currentLine(variable) {
var newDeli = [];
 for (let i = 0; i < variable.length; i++) { 
   newDeli.push(` ${i + 1}. ${variable[i]}`);
 } if (variable.length === 0) { 
   return "The line is currently empty.";
 }  if (variable.length === 1) {
   return `The line is currently:${newDeli}`;
   } else {
   return `The line is currently: ${newDeli}`;
 }
   } */
   
   //Create a function that takes a variable as an argument and returns an array 
function currentLine(lineArray) {
  var newDeli;
  if (lineArray.length === 0) { 
   return "The line is currently empty.";
  } else {
    // set a variable here to say "The line is currently: "
    // Then iterate over the line and add on to the variable above
    newDeli = "The line is currently: ";
    for (let i = 0; i < lineArray.length; i++) { 
      if (i === 0){ 
    newDeli = newDeli + (i + 1) + ". " + lineArray[i];
      } else {
        newDeli = newDeli + ", " + (i + 1) + ". " + lineArray[i]; 
      }
    }
   return newDeli;
  }
}