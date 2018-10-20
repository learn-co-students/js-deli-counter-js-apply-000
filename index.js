function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  let list = ``;

  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  
  else{
    for(var i = 0; i < katzDeliLine.length; i++){
      let punctuation = (i === katzDeliLine.length - 1)? '' : ',';
      list += ` ${i+ 1}. ${katzDeliLine[i]}${punctuation}`
      }
    return `The line is currently:${list}`;
  }
}
