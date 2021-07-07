function takeANumber(line, name) {
 line.push(name);
return (`Welcome, ${name}. You are number ${line.length} in line.`);
} 
function nowServing(katzDeli) {
var i=0;
while(i < katzDeli.length) {i++}
if (katzDeli.length === 0) {
return 'There is nobody waiting to be served!';
} else {
return (`Currently serving ${katzDeli.shift()}.`);
}
}
function currentLine(line) {
var lineAndNumbers = [];
if (line.length === 0) {
  return 'The line is currently empty.';
} 
for (var i=0; i<line.length; i++) {
  lineAndNumbers.push(`${i+1}. ${line[i]}`);
} 
return `The line is currently: ${lineAndNumbers.join(', ')}`;
}



///("The line is currently: 1. Bill, 2. Jane, 3. Ann");
/// ['Bill', 'Jane', 'Ann']

   


  
    



 





 
