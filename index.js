//var katzDeliLine = [];
function takeANumber(currentLineOfPeople, newComerName) {
  currentLineOfPeople.push(newComerName);
  var qPosition = currentLineOfPeople.indexOf(newComerName) + 1;
  return "Welcome, "+newComerName + ". You are number " + qPosition + " in line." ; 
} 

function nowServing(currentLineOfPeople) {
 if (currentLineOfPeople.length === 0) {
      //currentLineOfPeople.pop();
      return "There is nobody waiting to be served!";
 } else {
   return "Currently serving " + currentLineOfPeople.shift() + ".";

 }
 
}

function currentLine(currentLineOfPeople) {
  if (currentLineOfPeople.length ===0) {
    return "The line is currently empty.";
  } else {
    var stringArray = [];
    for (var i =0; i <currentLineOfPeople.length; i++) {
      stringArray.push([i+1] + ". " + currentLineOfPeople[i]);
    }
       
    return "The line is currently: "+ stringArray.join(", ");
  }
  
} 