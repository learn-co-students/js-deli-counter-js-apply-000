var katzDeliLine = [];

var first = "Jill";
var second = "Wesker";
var third = "Claire";
var fourth = "Barry";
var fifth = "Vegeta";
var sixth = "It\'s over 9000!!!!!!"


function takeANumber(lineOfPeople, newName) {
  
  // lineOfPeople.push(newName);
  
  if(newName === "Vegeta") {
    lineOfPeople.unshift(newName);
    return "Welcome, of course you get to the front!! " + newName + " You are now number " + (lineOfPeople.indexOf(newName)+1) + "!!";
  }
  else{
    lineOfPeople.push(newName);
    return "Welcome, " + newName + ". You are number " + (lineOfPeople.indexOf(newName)+1) + " in line.";
  
  }
}
console.log(takeANumber(katzDeliLine, first));
console.log(takeANumber(katzDeliLine, second));
console.log(takeANumber(katzDeliLine, third));
console.log(takeANumber(katzDeliLine, fourth));
console.log(takeANumber(katzDeliLine, fifth) + " cause, why the hell not?!?!");
console.log(takeANumber(katzDeliLine, sixth));


function nowServing(line) {
  if(line.length > 0) {
    return "Currently serving " + line.shift(0) + ".";
  }
   else {
     return "There is nobody waiting to be served!";
  }
}


function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty.";
  }
  let counter = "The line is currently: ";
  
  for(var i = 0; i < line.length; i++) {
    counter += (i+1) + ". " + line[i];
    if(i !== (line.length -1)) {
      counter += ", ";
    }
  }
  
  return counter;
  
}

