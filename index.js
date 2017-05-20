function takeANumber (katzDeliLine, personName){
  katzDeliLine.push(personName);
  return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`
}



 function nowServing(katzDeliLine){
   if(katzDeliLine.length===0){
     return `There is nobody waiting to be served!`;
   }
   var firstPerson=katzDeliLine.shift();
   return `Currently serving ${firstPerson}.`
 }

 function currentLine(katzDeliLine){
var strings=[]
 for (var i=0;i<katzDeliLine.length;i++){
   var string= `${i+1}. ${katzDeliLine[i]}`
strings.push(string)
 }

   if (katzDeliLine.length===0){
return `The line is currently empty.`
 }
 return `The line is currently: ${strings.join(`, `)}`;
 }
