var deliLine = [];

function takeANumber (deliLine, person){
  deliLine.push(person);
  return "Welcome, " + person + ". You are number " + (deliLine.length) + " in line.";
}

function nowServing(deliLine){
  if (deliLine.length > 0){
    return "Currently serving " + deliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deliLine) {
  var fullString = "";
  if (deliLine.length === 0){
    return "The line is currently empty."
  } else {
    if (deliLine.length > 0){
        for (var i = 0; i < deliLine.length; i++){
          if (i === deliLine.length-1){
            fullString += (i+1) + ". " + deliLine[i];
          } else {
            fullString += (i+1) + ". " + deliLine[i] + ", ";
          }
        }
      }
  }
  return "The line is currently: " + fullString;
}
