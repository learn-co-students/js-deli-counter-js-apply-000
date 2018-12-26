function takeANumber(lineOfPeople, name){
  lineOfPeople.push(name)
  return `Welcome, ${name}. You are number ${lineOfPeople.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  var firstP = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${firstP}.`
}

function currentLine(currentLine){
  if(currentLine.length === 0){
    return 'The line is currently empty.'
  }
  var newArray = [];
  for(var j = 0; j < currentLine.length; j++){
    newArray.push(`${j+1}. ${currentLine[j]}`);
  }
  return "The line is currently: " + newArray.join(', ');
}
