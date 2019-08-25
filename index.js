
function takeANumber(line,names){
  var welcome = "Welcome, ";
  var i = 0;
  if(line.length>0){
    i = line.length; 
  }
  if(line.length===0){
      welcome += names + ". You are number 1 in line.";
      line[i] = names; 
  }
  else{ 
    line[i] = names;
    i++;
        welcome += names + ". You are number " + i + " in line.";
  }
  return welcome; 
}
function nowServing(theLine){
  var serve = 'There is nobody waiting to be served!';
  if(theLine.length>0){
  serve = "Currently serving " + theLine[0] + '.';
  }
  theLine.splice(0,1);
 
  return serve; 
}


function currentLine(theLine){
   var current = "The line is currently";
   if(theLine.length===0){
     current += " empty.";
   }
   else{
     current += ": ";
     for(var k=0;k<theLine.length;k++){
       current += k+1 + ". " + theLine[k];
       if(k<theLine.length-1){
         current += ", ";
       }
     }
   }
   return current; 
}
//function currentLine(theLine){
//  var lineIs = "The line is currently";
//  var i = 0; 
//  if(theLine.length===0){
//    lineIs += " empty.";
//  }
//  if(theLine.length>0){
//     while(i<theLine.length){
//      lineIs = "The line is currently:" + i+1 + '.' + " " +theLine[i];
//     }
//    if(i<theLine.length-1){
 //     lineIs += ',';
//    }
//    i++;
//  }
  
//  return lineIs; 
//}
  

