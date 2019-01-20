function takeANumber(line,PersonName) {
    line.push(PersonName);
    var position = line.indexOf(PersonName) + 1;
    return "Welcome, " + PersonName + ". You are number "+ position +" in line.";
}

function nowServing(line){
  if (line.length===0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift() +".";
  }
  return line;
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  } else {
    var outputBegin = "The line is currently: ";
    var arrayPersonNumber = [];
    for (var i = 0; i < line.length; i++) {
      var pos =i + 1;
      arrayPersonNumber.push (pos + ". " + line[i]);
    }
    return outputBegin + arrayPersonNumber.join(', ');
  }
}