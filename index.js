function takeANumber(deliQueue, personName){
  deliQueue.push(personName);
  if(deliQueue.length !== 0){
  return `Welcome, ${deliQueue[deliQueue.length-1]}. You are number ${deliQueue.length} in line.`;
  }
}

function nowServing(currentLineBeingServed){
  if(currentLineBeingServed.length !== 0){
  var removedElement= currentLineBeingServed.shift(currentLineBeingServed[0]);
  return `Currently serving ${removedElement}.`; 
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(currentDeliQueue){
  
  var str=  'The line is currently: ';
  
  if(currentDeliQueue.length !== 0){
    for(var i=0; i<= currentDeliQueue.length-1; i++){
      str+= (i+1) + ". " + currentDeliQueue[i];
      if(currentDeliQueue[i] !== currentDeliQueue[currentDeliQueue.length-1]){
      str+= ", ";
      }
    }
    return str;
  }else{
     return 'The line is currently empty.';
  }
  
}