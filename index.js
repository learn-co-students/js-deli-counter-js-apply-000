var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  return ("Welcome, " + name + ". You are number " + (katzDeliLine.push(name)) + " in line.");
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    
    return "Currently serving " + (katzDeliLine.shift()) + ".";
    }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (katzDeliLine) {
 if (katzDeliLine.length) {
   const newArr = katzDeliLine.map((name, index ) => (
     `${index + 1}. ${name}`
     ));
     return  "The line is currently: " + newArr.join(", ");
 } else {
   return 'The line is currently empty.';
 }
}