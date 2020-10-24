//Deli Counter Lab


function takeANumber (katzDeliLine, name){
  
  var message=[];

  var num=((katzDeliLine.length)+1); 

    katzDeliLine[katzDeliLine.length]=name;
  
    message.push("Welcome, "+name+". You are number "+num+" in line.")
  
  return message;
}



function nowServing (katzDeliLine){
  
  var first;


  if (katzDeliLine.length===0)
  {
    return 'There is nobody waiting to be served!';
  }
  
  else 
  {
   first=katzDeliLine[0]
   katzDeliLine.shift(0)   

   return 'Currently serving '+  first+'.';
   }
  
}


function currentLine(katzDeliLine){
  
  var message=[];

  
  if (katzDeliLine.length===0)
  {
    return 'The line is currently empty.';
  }
  
  else{
    var a=1;
    for (var i=0; i<katzDeliLine.length; i++)
    { 
      message[i]=' '+a+'. '+katzDeliLine[i];
      a++;
    }
    
    return 'The line is currently:'+message;
    }
}

