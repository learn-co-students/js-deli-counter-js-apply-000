function takeANumber(deli, name){
   deli.push(name);
   return "Welcome, " + name + ". You are number " + deli.length  + " in line."
   
}

function nowServing(deli){
  if (deli[0]){
    return "Currently serving " + deli.shift() + "."
  }
  return "There is nobody waiting to be served!";
}

function currentLine(deli){
  if (!deli[0]){
    return "The line is currently empty."
  }
  
  
   var count = 1;
   return "The line is currently: 1. " + deli.reduce((acum, curval) => acum + ", " + (++count) + ". " + curval);
}