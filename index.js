var katzDeli = [];
function takeANumber (katzDeliLine, name){
 katzDeliLine.push(name);
 return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeli){
 if (katzDeli.length > 0) {
   return `Currently serving ${katzDeli.shift()}.`
   
 } else {
   return "There is nobody waiting to be served!"
}
}
var array = [];
function currentLine(katzDeli){
 for (let i=0; i < katzDeli.length; i++){
array.push(` ${i+1}. ${katzDeli[i]}`)
 }
 if (katzDeli.length === 0) {
   return "The line is currently empty.";
 } else return `The line is currently:${array}`;
 
}
