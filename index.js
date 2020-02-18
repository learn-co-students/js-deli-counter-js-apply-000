function takeANumber(line, customer){
  line.push(customer);
  
  return "Welcome, " + customer + ". You are number " + line.length + " in line."
}

function nowServing(line) {
  if(!line.length) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line.shift() +".";
  }
}

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  var peopleAndNumber = [];
  
  for(var i=0; i<line.length; i++) {
   peopleAndNumber.push(i+1 + ". "+ line[i]);
  }
  return "The line is currently: " + peopleAndNumber.join(', ');
}