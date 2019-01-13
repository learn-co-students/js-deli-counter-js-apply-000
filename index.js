var katzDeliLine = [];

function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " +  line.shift() + ".";
  }
}

function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty."
  }
  
  var nameNumArray = [];
  var i = 0;
  
  while (i < line.length) {
    nameNumArray.push( (i+1) + ". " + line[i] );
    i++;
  }
  nameNumArray = nameNumArray.join(", ");
  return "The line is currently: " + nameNumArray;
}