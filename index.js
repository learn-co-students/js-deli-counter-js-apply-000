function takeANumber (katzDeliLine, name) {
    katzDeliLine.push(name); 
   for (let i=0; i<katzDeliLine.length; i++) {
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
   }
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length===0){
    return "There is nobody waiting to be served!";
  } 
  if (katzDeliLine.length>=1) {
      return `Currently serving ${katzDeliLine.shift()}.`;
  }
}


function currentLine (katzDeliLine) {
  
  if (katzDeliLine.length===0){
    return "The line is currently empty.";
  } 
  if (katzDeliLine.length>=1) {
    let newArray = [];
    for (let i=0; i<katzDeliLine.length; i++) {
      newArray.push(`${i+1}. ${katzDeliLine[i]}`);
    }
    // first make a copy of katzDeliLine and insert [number]. + name
    //newArray elements into String and join with "newArray.join(", ")"
    return `The line is currently: ` + newArray.join(", ");
    }
}