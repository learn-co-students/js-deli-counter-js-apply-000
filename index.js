var katzDeliLine = [];

function takeANumber(katzDeliLine,newPerson){
  
  katzDeliLine.push(newPerson);

   return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

   function nowServing(line){
 
      if (line.length === 0){
         return (`There is nobody waiting to be served!`);
    
   }else {

        return (`Currently serving ${line.shift()}.`);
}
 } 
    

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  }
let newArray = [];

for (let i =0; i< line.length; ++i){
  newArray.push(i+1 + ". " + line[i])
  }
  
return "The line is currently: " + newArray.join(', ');
}

   