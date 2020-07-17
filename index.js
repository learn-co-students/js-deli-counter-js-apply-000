function takeANumber(peopleInLine, personName){
  
  peopleInLine.push(personName);
  return `Welcome, ${personName}. You are number ${peopleInLine.length} in line.`;
}


function nowServing(peopleInLine){
  if(peopleInLine.length===0){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${peopleInLine.shift()}.`
  }
}


function currentLine(peopleInLine){
  if(!peopleInLine.length){
    return "The line is currently empty."
  }else{
    var newList=[];
    for(let i=0; i<peopleInLine.length; i++){
      newList.push(`${i+1}. ${peopleInLine[i]}`);
    }
  }
  return `The line is currently: ${newList.join(', ')}`;
}














