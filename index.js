function nowServing(line){
  var first = line.shift();

  if(first != null) {
    return "Currently serving " + first + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (line){

  if(line.length == 0) {
    return "The line is currently empty.";
  }

  var output = "The line is currently: ";

  for (var i = 0; i < line.length; i++) {
    output += (i+1) + ". " + line[i] + ", ";
  }

  output = output.slice(0, - 2);

  return output;
}

function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + (line.length) + " in line.";
}
