function takeANumber(array, string) {
  var n = array.length;
  array.push(string);
  return "Welcome, " + string + ". You are number " + (n+1) + " in line.";
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return "Currently serving " + array.shift() + ".";
}

function currentLine(array){
  if (array.length === 0) {
    return "The line is currently empty."
  }
  var line = "The line is currently:";
  var j = 0;
  for(var i = 0; i < array.length; i++){
    j = i + 1;
    line += " " + j + ". " + array[i];
    if (j < array.length){
      line += ",";
    }
  }
  return line;
}
