//Greet customer and give them their place in line 

function takeANumber(line, customer){
  line.push(customer);
  
  return "Welcome, " + customer + ". You are number " + line.length + " in line."
}

//Return name of customer being served, then remove them from the queue 

function nowServing(line) {
  if(line.length===0) {
    return "There is nobody waiting to be served!"
  } else { 
    return "Currently serving " + line.shift() +"."; 
  }
}

//Gives out names and numnbers of the people in line 

function currentLine(line){
  if(line.length===0) {
    return "The line is currently empty.";
  }
  else {
  var peopleAndNumber = [];
  
  for(var i=0; i<line.length; i++) {
   peopleAndNumber.push(i+1 + ". "+ line[i]);
  }
  return "The line is currently: " + peopleAndNumber.join(', ');
  }
}