


var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name)
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function currentLine(current_line) {
    var line = []
    if (current_line.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < current_line.length; i++) {
        line += (i + 1) + ". " + current_line[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}


function nowServing(current_line){

 if (current_line.length === 0) {
  return "There is nobody waiting to be served!";
 }
 else{ 
  var first_person = current_line[0];
  current_line.shift();
  return "Currently serving " + first_person + ".";
 }
}