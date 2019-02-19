


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
var i = []; 
if (line.length === 0) {
  return 'The line is currently empty.';
}
for (i=0; i<line.length; i++) {
console.log('The line is currently' + line);
}
}
   


  
    



 





 
