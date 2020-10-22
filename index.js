function takeANumber(deliLine, name) {
var spotInLine = deliLine.length + 1;

//this denotes the number given to a person, as opposed to the number in the array

deliLine.push(name);

//adding to the length & adding the person's name

return "Welcome, " + name + ". You are number " + spotInLine + " in line.";
}

function nowServing(katzDeliLine) {
  var personInLine = katzDeliLine[0];
  
  //equal to the person at index 0 (first person in line)
  
  if(katzDeliLine.length === 0)
  return "There is nobody waiting to be served!";

katzDeliLine.shift();
//removes the first person in line

return "Currently serving " + personInLine + ".";
}

function currentLine(people) {
  if(people.length === 0)
  return "The line is currently empty.";
  
  var line = ""
    
    //line is a string, so "line = line ..." will come out as a sentence
  
  for(let i = 0; i < people.length; i++) {
  line += (i + 1) + ". " + people[i]; 
  
    //accessing the person at certain index in the array. loop stops and adds period when done
  
    if(i != people.length - 1) {
    line = line + ", ";
    
    //adds comma when loop is not done (not at last index in array)
      
    }
  } 
return "The line is currently: " + line;

  
}