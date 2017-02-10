var katzDeli = [];

function takeANumber(deliLine, person){
  var position = deliLine.length;
  deliLine[position++] = person;
  return "Welcome, " + person + ". You are number " + position + " in line.";
}

function nowServing(deliLine){
//return 1st person in line and then remove that individual from the line
  var lineLength = deliLine.length;
  var person = "";
  if(lineLength === 0){
    return "There is nobody waiting to be served!";
  }
  person = deliLine[0];
  deliLine.splice(0, 1);
  return "Currently serving " + person + ".";
}

function currentLine(deliLine){
  var i = 0, lineLength = deliLine.length;
  var msg = "";
  if(lineLength === 0){
    return "The line is currently empty.";
  }
  msg = "The line is currently:";
  var msg1 = " ";
  while(i < lineLength){
    msg = msg + msg1 + (i + 1) + ". " + deliLine[i++];
    msg1 = ", ";
  }
  return msg;
}