function takeANumber(currLine,newName){
  currLine.push(newName);
 return `Welcome, ${newName}. You are number `+ (currLine.length) +' in line.'
}

function nowServing(p){
  if(p.length===0){
   return "There is nobody waiting to be served!";
  }
   return 'Currently serving ' + p.shift()+'.';
}

function currentLine(p){
  
  if(p.length===0){
    return "The line is currently empty.";
  }
  
  var r = 'The line is currently: ';
  for( var i=0; i<p.length ;i++){
      if(i>0){
        r+= ', '; 
      }
     
      r += (i+1) +'. '+p[i]
    }
    return r;
}
