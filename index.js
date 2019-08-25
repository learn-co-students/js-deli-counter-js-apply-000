
function takeANumber(line,names){
  var welcome = "Welcome, ";
  var i = 0;
  if(line.length>0){
    i = line.length; 
  }
  if(line.length===0){
      welcome += names + ". You are number 1 in line.";
  }
  else{
        welcome += names + ". You are number " + i + " in line,";
  }
  line[i] = names; 
  return welcome; 
}
function nowServing(theLine){
  var serve = 'There is nobody waiting to be served!';
  if(theLine.length>0){
  serve = "Currently serving " + theLine[0] + '.';
  }
  for(var i =0;i<theLine.length;i++){
    theLine.splice(i,i);
  }
  return serve; 
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
  

