
function takeANumber(current, name){
    current.push(name);
    return "Welcome, " + name + ". You are number " + (current.length) +" in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine){
   let newA = [];
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }else{
    for(let i = 0; i < katzDeliLine.length; i++){
      newA.push(" "+(i + 1)+ ". " + katzDeliLine[i]);
    }
    return "The line is currently:" + newA;
  }
}