var katzDeli = [];

function takeANumber(currentPeople, newPerson){
  currentPeople.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentPeople.indexOf(newPerson) + 1} in line.`;
}

function nowServing(katzDeliLine){
  var currentPerson = katzDeliLine.shift();
  return katzDeliLine.length ? `Currently serving ${currentPerson}.` : "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length){
    var line = "";
    for(let i = 0; i < katzDeliLine.length; i++){
      line += ` ${i + 1}. ${katzDeliLine[i]},`;
    }
    return "The line is currently:" + line.slice(0,-1);
  }
  else{
    return "The line is currently empty.";
  }
}
