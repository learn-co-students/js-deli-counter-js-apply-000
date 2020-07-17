function takeANumber(currentLine, personName) {
  currentLine.push(personName);
  if (currentLine.length!==0) {
    return `Welcome, ${personName}. You are number ${currentLine.length} in line.`
  }
}



function nowServing(Line){
  if(!Line.length){
    return "There is nobody waiting to be served!";
  }else{
    return `Currently serving ${Line.shift()}.`;

  }
}


function currentLine(currentLine){
var newLine=[];
if(!currentLine.length){
  return "The line is currently empty."
}else{
  for(let i= 0; i<currentLine.length; i++){
    newLine.push(`${i+1}. ${currentLine[i]}`)
  }
}
return `The line is currently: ${newLine.join(', ')}`

}







