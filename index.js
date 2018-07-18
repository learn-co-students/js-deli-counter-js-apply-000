// represent an empty array for deli
var katzDeli = [];

// input: accept the current line of people (katzDeliLine),
      //  person's name
// output: return their position in line.
function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

// nowserving
// return the first person in line 
// and then, remove that individual from the line.
// if there is nobody in line, return 'There is nobody waiting to be served'
function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  return `Currently serving ${array.shift(0)}.`;
}

// Create a function 'currentLine'
// input: array 
// output: return the current line
function currentLine(array) {
  if (array.length === 0) {
    return "The line is currently empty.";
  }
  
  let str = "";
  for (let i = 0; i < array.length; i++) {
    if (i == array.length - 1) {
      break;
    }
    str += `${i+1}. ${array[i]}, `;
  }
  var last = array.length - 1;
  str += `${array.length}. ${array[last]}`;
  
  return `The line is currently: ${str}`;
}