//deli line is empty at the beginning of the day
var katzDeliLine = [];

//Function accepts the current line of people, katzDeliLine Parameter & the persons name.
//Push the name to the line array 

function takeANumber(katzDeliLine, name)  {
  katzDeliLine.push(name);
  
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
  return "There is nobody waiting to be served!"
}

else {
  return ("Currently serving " + katzDeliLine.shift() + ".");
}
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty."
  }
  
  var katzDeliLineNameAndNumbers = [];
  
  for(var i=0; i<katzDeliLine.length; i++) {
    katzDeliLineNameAndNumbers.push(i+1 + ". " + katzDeliLine[i]); 
  }
  
  return ("The line is currently: " + katzDeliLineNameAndNumbers.join(', '));
  
  
}

 
