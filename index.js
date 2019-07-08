var katzDeliLine = [];

function takeANumber(currentLine, person){
  let number = 0;
  currentLine.push(person);
  for(let i = 0; i < currentLine.length; i++){
    number = i + 1;
  }
  return "Welcome, " + person + ". You are number " + number + " in line.";
}

function nowServing(currentLine){
  var customer = currentLine.shift();
  
  if(currentLine == ''){
    return "There is nobody waiting to be served!";
  }
  return customer;
}

function currentLine(currentLine){
  let s = "";
  var line = [];
  for(let i = 0; i < currentLine.length; i++){
    let item = (i + 1) + ". " + currentLine[i];
    line.push(item);
    s = line.toString().replace(/,/g, ", ");
  }
  return "The line is currently: " + s;
}
