
function takeANumber (katzDeliLine, name){
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + position + " in line."
}

function nowServing (currentLine){
  var string;
  if ( currentLine.length === 0){
    string = "There is nobody waiting to be served!"
  } else {
  string = "Currently serving "+ currentLine[0] + ".";
  currentLine.shift()
}
return string
}

function currentLine(line){
  var text;
  if (line.length === 0){
    text = "The line is currently empty."
  } else {
    text = "The line is currently: "
    for(var i = 0; i < line.length ; i++){
      if (i === 0){
        text = text + (i+1) + ". " + line[i];
      } else {
        text = text + ", " + (i+1) + ". " + line[i];
      }
    }
  }
  return text;
}
