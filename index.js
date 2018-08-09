 function takeANumber(people,newPerson){
   var peeps= people;
   var newbie =newPerson;
   var count= peeps.length + 1;
   peeps.push(newbie);
   return "Welcome, "+ newbie +". You are number "+ count.toString() +" in line.";
 }
 
 function nowServing(katzDeliLine){
 
  var count;
  for(count=0; count<katzDeliLine.length; count++){
   var inline = katzDeliLine.shift();
   
   return "Currently serving "+ inline + ".";
  }
  return "There is nobody waiting to be served!";
 }
 
 function currentLine(katzDeliLine){
    var num;
    var count=1;
    var new_katzDeliLine=[];
    for(num=0; num<katzDeliLine.length; num++){
       if (num===0){
          katzDeliLine[num]= count.toString() + ". "+ katzDeliLine[num];
        }
       if (num !== 0){
          katzDeliLine[num]=" "+count.toString() + ". "+ katzDeliLine[num]; 
        }
     
       new_katzDeliLine.push(katzDeliLine[num]);
       count= count + 1;
   
  
    if (count === katzDeliLine.length+1) {
     return "The line is currently: " + new_katzDeliLine.toString();
      }
   }
   return "The line is currently empty.";
   
 }