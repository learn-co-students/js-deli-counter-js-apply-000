function takeANumber(katzDeli, name) {
  
var person = name;
katzDeli.push(name);
var lineNum = katzDeli.length;
 
  return "Welcome, " + name + ". You are number " + lineNum +" in line.";
}


function nowServing(katzDeli) {
  
  if(katzDeli.length === 0) {
    
    return "There is nobody waiting to be served!";
    
  } else {
      
    
      let current = katzDeli[0];
      katzDeli.shift();
      return "Currently serving " + current + ".";
      
      
  }
 
   
}

function currentLine(katzDeli) {
  
  if(katzDeli.length === 0) {
    
    return "The line is currently empty.";
    
  } else {
    var name = "";
    
  //  name = name + 1;
  
    for (var i = 0; i < katzDeli.length; i++) {
       // find a way to add comma conditionaly 
      if (i > 0){
        name += ", ";
      }
      
      name += (i+1) + ". " + katzDeli[i];
      
     
      
      
    }
    
     return "The line is currently: " + name;
    
    
  }
  
  
}


