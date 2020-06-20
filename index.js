
//currLine= array of people in line n = new person

function takeANumber(currLine, n){
 
  
  var ctr= currLine.length;
  
  //position in line is index+1
  
  currLine.push(n)
  return "Welcome, " + n + ". You are number " + (ctr+1) + " in line."
  
}

function nowServing(currLine){

       if(currLine.length !== 0){
         var n = currLine.shift();
         return "Currently serving " + n + ".";
         
       }
       
      return "There is nobody waiting to be served!";
}

function currentLine(currLine){
  
  var line = "The line is currently: ";
  
  if (currLine.length == 0)
      return "The line is currently empty."
  
  for( var i = 0; i<currLine.length; i++){
    
    line += (i+1) + ". " + currLine[i];
    
    if(i !== (currLine.length-1)){
      line +=  ", "
    }
    
  }
  return line;
}