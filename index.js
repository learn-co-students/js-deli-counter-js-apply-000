var katzDeliLine = [];
 
function takeANumber(katzDeliLine,  str){
  var input= str;
  katzDeliLine.push(input);
  
  var index = katzDeliLine.indexOf(str);
  index +=1;
  return "Welcome, "+str+". You are number "+index +" in line.";
  
}


function  currentLine(katzDeliLine){
  var str = "The line is currently: ";
  if(katzDeliLine.length <1){
    
    return "The line is currently empty.";
  }
  var inStr= "";
  for(var a = 0;a<katzDeliLine.length;a++){
    var index = a+1;
    inStr += index+". "+katzDeliLine[a]+", ";
  }
  str = str + inStr;
  return str.substring(0,str.length-2); 

}
 
function nowServing(katzDeliLine){
  var index = katzDeliLine.length;
   var str = katzDeliLine[0];
   if(index >0){
     let a =katzDeliLine.shift()
     return 'Currently serving '+a+".";
   }else{
     return 'There is nobody waiting to be served!';
   }

  
}
 