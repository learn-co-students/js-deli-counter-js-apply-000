 function takeANumber (katzDeliLine, name){
   
 
  katzDeliLine.push(name)
return "Welcome, " + name +". You are number "+ katzDeliLine.length +" in line."
}

function nowServing(deliLinee){
  //var position=deliLinee.length + 1
  if(deliLinee.length===0){
  return "There is nobody waiting to be served!"
  }
  else{
  var next=deliLinee.shift()
   return "Currently serving " + next + "." ;
   
  }
  
 }
 function currentLine(katzDeliLine){
   if(katzDeliLine.length !==0){
     //katzDeliLine.sort();
     return "The line is currently:"+""+ " 1."+ " " +katzDeliLine[0]+","+""+ " 2."+ " "
     +katzDeliLine[1]+","+""+ " 3."+" "+katzDeliLine[2];
   }
   
 else{
   return"The line is currently empty."
 }
 }
   
   
   
 