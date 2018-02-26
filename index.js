function takeANumber(katzDeli,person){
katzDeli.push(person);
   return`Welcome, ${person}. You are number ${katzDeli.length} in line.`

}


function nowServing(katzDeli){
   if (katzDeli.length <= 0 ) {return `There is nobody waiting to be served!`; 
   }
   
   
   
  return `Currently serving ${katzDeli.shift()}.`
}


function currentLine(katzDeli){
  var text=[]
  if (katzDeli.length <= 0 ) {return `The line is currently empty.`; 
   }
   
  for (let i= 0; i < katzDeli.length; i++)
 {
  text.push(` ${i+1}. ${katzDeli[i]}`) 
   
 }
     
      return `The line is currently:${text}`
}