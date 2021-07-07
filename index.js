var katzDeliLine=[];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(`${name}`);
  var number= katzDeliLine.length
return (`Welcome, ${name}. You are number ${number} in line.`);}

function nowServing(katzDeliLine){
  if(katzDeliLine.length>=1){
  return(`Currently serving ${katzDeliLine.shift()}.`);
}
else {
  return ("There is nobody waiting to be served!");
}}


function currentLine(deliLine){
  var line = [];
    if (deliLine.length===0)
          return ("The line is currently empty.");
   else {
     for(var i=0; i<deliLine.length; i++){
       line += (i+1) +". " + deliLine[i] +", "
     }
     line = line.slice(0,line.length-2)
   }
  return "The line is currently: " + line
}
