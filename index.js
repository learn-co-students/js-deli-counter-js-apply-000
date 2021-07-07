function takeANumber(katzDeliLine, name){
  if(Array.isArray(name)){ //if more than one person is joining the line or name is a list
    for(var i = 0; i<name.length; i++){ //iterate through the array of names
      katzDeliLine.push(name[i]); // add each individual name to the line
      return "Welcome, " + name[i] + ". You are number " + katzDeliLine.length + " in line."; // welcome each customer individually
    }
  } else {
    katzDeliLine.push(name); //otherwise,just add the name to the line
    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."; //welcome them
  }
}


function currentLine(katzDeliLine){
  var line; //string placeholder
  if(katzDeliLine.length === 0 ){ //if length of line is 0
    line = "The line is currently empty." //then the line is empty
  } else { //otherwise
    line = "The line is currently:"; //beginning of the string
    for (var i = 0; i< katzDeliLine.length; i++){ //iterate through the line
      var number = i+1; //start at one and not zero
      line += " " + number + ". " + katzDeliLine[i] // format
      if(i != katzDeliLine.length - 1) { //if the name is not at the end of the list
        line += "," //add ","
      }
    }
    
  }
  return line;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0 ){ //if the list is not empty
    var name = katzDeliLine[0]; //return the first item in the list, or the customer who is up next
    katzDeliLine.shift(); //remove them from the list
    return "Currently serving " + name + "."; //format 
  } else {
    return "There is nobody waiting to be served!"; //nobody is on the line!
  }
}