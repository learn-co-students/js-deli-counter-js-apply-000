function takeANumber(line, name) {
        line.push(name);
 return `Welcome, ${name}. You are number ${line.length} in line.`;
}
  

function nowServing(line) {
 if (line.length === 0) {
    return `There is nobody waiting to be served!`;
} else {
   var str = line[0]; //assigned variable for first element of array so that we can call this element in our solution before we remove it from our array
   line.shift(0); //remove first element of array
   return `Currently serving ${str}.`;
}
}


function currentLine(line) {
var newLine = []; 
for (var i = 0; i < line.length; i++) {
      newLine.push(` ${i + 1}. ${line[i]}`); //add new customers and their number in line to a new array so that we can later call this array as part of our solution.
}
if (line.length === 0) {
      return `The line is currently empty.`;
} else {
  return (`The line is currently:` + newLine);
}
}

