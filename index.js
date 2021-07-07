

function takeANumber(array, name) {
  array.push(name);
  return "Welcome, "+name+". You are number "+(array.indexOf(name)+1)+" in line.";
}


function nowServing(array){
  if (array.length > 0){
    return "Currently serving "+array.shift()+".";
  }
  else if(array.length === 0){
    return "There is nobody waiting to be served!";  
  } 
}

function currentLine(array){
  var initialKeyWord ="The line is currently";
  var collector =[];
  var iterator = array.entries();
  if (array.length >0){
    var i;
    for (i =0; i <array.length; i++){
      collector.push((i+1)+ ". "+array[i]);  
    }
    return initialKeyWord+": "+collector.join(', ');
  }
  else if (array.length === 0){
    return initialKeyWord+" empty.";
  }
}