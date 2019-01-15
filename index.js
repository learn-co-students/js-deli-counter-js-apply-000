function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  let position = katzDeliLine.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length < 1){
    return `There is nobody waiting to be served!`;
  } else {
    let next =  katzDeliLine.shift();
    return `Currently serving ${next}.`;
  }
}

function currentLine(katzDeliLine){
  let returnStr = 'The line is currently: ';
  if (katzDeliLine.length < 1){
    returnStr = 'The line is currently empty.'
  } else {
    for(let i=0; i<katzDeliLine.length;i++){
      let person = katzDeliLine[i];
      let position = i+1;
      let personPosition =  position + ". " + person;
      if(i === katzDeliLine.length -1){
        returnStr += personPosition;
      } else {
        returnStr += personPosition + ', ';
      }
    }
  }
  return returnStr;
}