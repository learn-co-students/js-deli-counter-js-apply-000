function takeANumber (line, person) {
  line.push(person);
  return "Welcome, " + person + ". You are number " + line.length + " in line."; //remember your spacing!!
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}




function currentLine (line) {
  if (line.length ===0) {
    return "The line is currently empty.";
  }
    var numbers = [];
   for(var i=0; i<line.length; i++) {
    numbers.push(i+1 + ". "+ line[i]);
  }
  return "The line is currently: " + numbers.join(', ');
}
