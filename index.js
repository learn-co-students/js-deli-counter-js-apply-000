//create container to store names
var katzDeliLine = [];

//define function takeANumber
function takeANumber (katzDeliLine, name) {
  
  //push contents of name accross to katzDeliLine array
  katzDeliLine.push(name);
  
  // return message stating the name and the position of the person in line.
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
  
}

//define function currentLine. Tells the person their position in the line.
function currentLine(line) {
  
  //Create an empty container (array) to store the persons name and position.
  var ref = [];
  
  // i used as counter
  var i;
  
  // write static part of printed message
  var message = "The line is currently:";
  
  //copy contents (names) from katzDeliLine accross to line array
  katzDeliLine.push(line);
  
  //used if statement to give two conditional paths/branches. If there is a value and if there isnt.
  if (line.length > 0)
  {
    //used a for loop to execute code block until conditions were met before returning the values to an array then concating with message variable.
    for (i = 0; i < line.length; i++) {
    ref.push(" " + (i +1)  + ". " + line[i]); 
    }
    return message + ref;
  }
  // string is now only seen if the line array is empty
  else {
  return "The line is currently empty.";
  }
}

function nowServing (line) {
  var ref2 = [];
  var message2 = "Currently serving "; 
  katzDeliLine.push(line);
  
  //used an if loop to choose a specific branch, dependent on the condition set. Splices the first data set from the array after storing customers name to ref2 array to indicate customer has been served. Message is then printed.
  if (line.length > 0) {
  ref2.push(line[0]);
  line.splice(0,1);
  return message2 + ref2 + ".";
  }
  
  // string is now only seen if the line array is empty
  else {
    return "There is nobody waiting to be served!";
  }
  
}