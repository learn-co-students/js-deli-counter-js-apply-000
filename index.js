function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name)
return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
  
}

function nowServing(katzDeliLine) {
if (katzDeliLine.length === 0) {
return ("There is nobody waiting to be served!");
} else {
 return ("Currently serving " + katzDeliLine.shift() + ".");  
}

}

var line = [];

function currentLine(katzDeliLine) {
  
for (let i=0; i < katzDeliLine.length; i++){
  line.push(" " + [i+1] + ". " + katzDeliLine[i])
  
} if (katzDeliLine.length === 0) {
    return ("The line is currently empty.");
  } else {
  return("The line is currently:" + line);
  }
}




//Notes/Error Messages:
//length property returns the number of elements in that array
//katz.Deliline.length not a function
//Expected 'Currently serving Steven', instead of just 'Steven'
//shift method removes the first element from an array and returns that removed element
//currentLine is not defined -- need to define currentLine so it returned "The line is currently empty." if no one is in line
//"The line is currently: 3. nodejs" instead of "The line is currently: 1. Bill, 2. Jane, 3. Ann"
// -The line is currently: Bill,Jane,Ann. +The line is currently: 1. Bill, 2. Jane, 3. Ann
// OOH I probably need a loop to go through the array of names
//From Mozilla: the push() adds one or more elements to the end of an array and returns the new length of the array
//deli currentLine(line) says who is in line when there are people waiting:
//ReferenceError: line is not defined -- wrote line instead of katzDeliLine
// then wrote katzDeliline instead of katzDeliLine