function takeANumber (katzDeliLine, name) {
  // katzDeliLine enters the function as an empty array. I've used 'push' to add each of the values of the name array to katzDeliLine
  katzDeliLine.push(name);
  // I've defined a new variable called position which finds the index value of 'name' in katzDeliLine and then adds 1 since the first index value is 0. 
  let position = 1 + katzDeliLine.indexOf(name);
  let msg = "Welcome, " + name + ". You are number " + position + " in line."; 
  return msg; 
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  let serving = katzDeliLine[0];
  katzDeliLine.shift(); // shift() removes the first entry in the array and shifts the others down a position
  return "Currently serving " + serving + ".";
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  var msg = ""; // Define msg as a string
  
  // I've used the '+=' operator to concatenate the strings inside the 'for' loop
  for(var i=0; i<katzDeliLine.length; i++){
    msg += (i + 1) + ". " + katzDeliLine[i];
    
    // The following 'if' statement is used to concatenate a comma to the message unless it is the last entry. 
    if (i<katzDeliLine.length - 1) {
      msg += ", "
    }
  }
  return "The line is currently: " + msg;
}










