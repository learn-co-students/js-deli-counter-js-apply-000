var katzDeliLine = [];



function takeANumber(katzDeliLine, name){

katzDeliLine.push(name);

return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;

}

function nowServing (katzDeliLine){

if (katzDeliLine.length === 0)return 'There is nobody waiting to be served!';
return `Currently serving ${katzDeliLine.shift()}.`

}

function currentLine (katzDeliLine){
let out = "The line is currently: ";
if (katzDeliLine.length === 0)return 'The line is currently empty.';

for (let i =1; i <= katzDeliLine.length; i++){
if (i === katzDeliLine.length){
  out = `${out}${i}. ${katzDeliLine[i-1]}`;
}
  else{
out = `${out}${i}. ${katzDeliLine[i-1]}, `;
}
}

return out;
}
