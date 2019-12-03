

let katzDeliLine=[]

function takeANumber(katzDeliLine,name){
 
 katzDeliLine.push(name);
 
 return ("Welcome, "+ name +". You are number "+katzDeliLine.length+" in line.")
 
}


function nowServing(katzDeliLine){
  if(!katzDeliLine.length){
    return"There is nobody waiting to be served!"
  }else{
    return "Currently serving "+katzDeliLine.shift() +".";
  }
  
}

function currentLine(katzDeliLine){
  
  let final=[];
    for(let i=0; i<katzDeliLine.length;i++){
      final.push(" "+[i+1] +". "+ katzDeliLine[i]);
    }
    if(!katzDeliLine.length){
     return "The line is currently empty."
    }else{
      return "The line is currently:"+ final
    }
    
}