function takeANumber(line,PersonName) {
    //line.push(PersonName); //return length of line
    //var position = line.indexOf(PersonName) + 1;
    //line.length
    return "Welcome, " + PersonName +". You are number "+ line.push(PersonName)+" in line.";
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
