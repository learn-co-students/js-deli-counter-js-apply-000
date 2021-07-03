function takeANumber(katzDeliLine, name) {
  let endIdx=katzDeliLine.length+1;
   if(typeof 'name'==='string'){
     katzDeliLine.push(name);
   }
  return `Welcome, ${name}. You are number ${endIdx} in line.`
}
function nowServing(katzDeliLine) {
  let servingLine=katzDeliLine;
  while(servingLine.length!==0) {
    let startIdx = servingLine.shift();
    return `Currently serving ${startIdx}.`
  }
  return 'There is nobody waiting to be served!';
}

function currentLine(katzDeliLine) {
    if(katzDeliLine.length===0) {
      return "The line is currently empty.";
    }
    let currentLength='The line is currently: ';
    for(let i=0;i<=katzDeliLine.length-1;i++){
      let currentPerson=katzDeliLine[i];
      let linePlace=i+1;
      currentLength=currentLength.concat(`${linePlace}. ${currentPerson}`);
      if(linePlace!==katzDeliLine.length){
        currentLength+=', ';
      }
    }
    return currentLength;
}