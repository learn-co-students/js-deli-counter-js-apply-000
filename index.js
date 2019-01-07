var katzDeli = [];


function takeANumber(katzDeli, name) {
    katzDeli.push(name); 
    
    return ("Welcome, " + name + ". " + "You are number " + katzDeli.length + " in line.");
}

function nowServing(katzDeli) { 
  for(var i = 0; i < katzDeli.length; i++) {
  }
     
     if (katzDeli.length === 0) {
         return ("There is nobody waiting to be served!");
     }
    
    else {
      return ("Currently serving " +  katzDeli.shift() + ".");
    }
}

function currentLine(katzDeli) { 
  var array = [];
 
  for(var i = 0; i < katzDeli.length; i++) { 
      array.push(parseInt(i+1)  + '. ' + katzDeli[i])
  }  
  
      if (katzDeli.length === 0) {
        return("The line is currently empty.");
    }
      else {
       return("The line is currently: " + array.join(', '));
      }

  
  
}// end of currentLine

