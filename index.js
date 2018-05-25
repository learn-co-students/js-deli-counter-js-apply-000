var katzDeli = [];
function takeANumber(katzDeli,name){
 katzDeli.push(name);
 
  return "Welcome, "+name+". You are number "+ katzDeli.length +" in line.";
}

function nowServing(katzDeli){
  if (katzDeli.length>0){
    
    var cus =katzDeli[0];
    katzDeli.shift();
    return "Currently serving "+cus+".";
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeli){
  var n = katzDeli.length
  var cusandnum=[]
  var i=0
  if( katzDeli.length===0){
    return "The line is currently empty."
  } 

 
  for (i=0;i<n;i++){
  cusandnum.push( i+1+". "+katzDeli[i])}
  return "The line is currently: "+ cusandnum.join(", ") ;
    
  }
