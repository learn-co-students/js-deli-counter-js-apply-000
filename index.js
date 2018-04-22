function takeANumber(katzDeliLine,newName) {
 let numInLine = katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${numInLine} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!";
  }
  else {
    let firstInLine = katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`;
  }
}

function currentLine(katzDeliLine) {
  let lineString ="The line is currently";
  if(katzDeliLine.length===0){
    lineString+=" empty.";
    return lineString;
  }
  else{
    lineString+=": "
    katzDeliLine.forEach((person, i) =>{
     lineString+=`${i+1}. ${person}`;
     if(i!==katzDeliLine.length-1){
       lineString+=", "
     }
    })
    return lineString;
  }
}