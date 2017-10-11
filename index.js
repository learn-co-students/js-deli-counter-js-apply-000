function takeANumber(katzDeliLine, newPerson){
  if (katzDeliLine){
    katzDeliLine.push(`${newPerson}`);
  }
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  }
  var firstPerson = katzDeliLine.shift();
  return `Currently serving ${firstPerson}.`;
}

function currentLine(katzDeli){
  var line = [];
  for(var i = 0; i < katzDeli.length; i++){
    line.push(` `+[i+1]+`. ` + katzDeli[i])
  }
  if (katzDeli.length < 1){
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}
