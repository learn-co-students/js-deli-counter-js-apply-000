var katzDeliLine = [];

function takeANumber(thecurrentLine, newPerson){
  thecurrentLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${thecurrentLine.length} in line.`
  
  
}

function nowServing(thecurrentLine){
  if(thecurrentLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    var theOne = thecurrentLine[0];
    thecurrentLine.shift();
    return "Currently serving " + theOne + "."
    
  }
  
}
function currentLine(thecurrentLine){
  if (thecurrentLine.length === 0){
    return 'The line is currently empty.';
  
  }
  var theAns = [];
  for (let i = 0;i<thecurrentLine.length; i++){
    var people = thecurrentLine[i];
    theAns.push(i+1 + '. ' + people);
  }
  return `The line is currently: ` + theAns.join(`, `);
    
  }
