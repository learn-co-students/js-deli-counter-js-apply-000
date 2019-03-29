//Takes 2 parameters and adds values/indexes to the end of an array argument. It returns a string.
function takeANumber(line,newPerson){
  line.push(newPerson);
  return(`Welcome, ${newPerson}. You are number ${line.length} in line.`);
}
 //receives array parameter, returns a string with beginning array index and shifts/removes it until none is left
function nowServing(line){

    if (line.length === 0) {
      return "There is nobody waiting to be served!";
    }else
      return (`Currently serving ${line.shift()}.`);
}

 //
 function currentLine(line){
   var newLine=[]
   let i=0;
   while(i<line.length){
    newLine.push(' '+(i+1) + '. ' + line[i])
    i++
   }
   if(line.length===0){
     return ('The line is currently empty.')
   }else{
     return ('The line is currently:'+ newLine)
   }
 }