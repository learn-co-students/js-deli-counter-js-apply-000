
var katzDeliLine = [];
var Name = [];
function takeANumber(katzDeliLine, name){
katzDeliLine.push(`${name}`);

return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
 }


 function nowServing(katzDeliLine){
   let i =0;
while (i <katzDeliLine.length) {
i++;
}
   if (katzDeliLine.length === 0) {
     return "There is nobody waiting to be served!";
   }
     else {
       return (`Currently serving ${katzDeliLine.shift()}.`);
     }

  }

    var inLine =[];
function currentLine(katzDeliLine){

  let i = 0;
  while (i < katzDeliLine.length) {
    inLine.push(` ` +[i+1]+`. `  + katzDeliLine[i])
    i++;
  }
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else
    return (`The line is currently:` + inLine);
  }
