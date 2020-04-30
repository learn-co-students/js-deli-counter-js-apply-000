function takeANumber(katzDeliLine, newPerson) {
katzDeliLine.push(newPerson);

return 'Welcome, ' + newPerson + '. You are number ' + katzDeliLine.length + ' in line.';
}

takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."



function nowServing(katzDeliLine) {
//I need to make a variable for the first person in line
 
 if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
 }

 for (var i = 0; i < katzDeliLine.length; i++) {
  
  var firstPerson = katzDeliLine[0];
  katzDeliLine.shift();
 
  return 'Currently serving ' + firstPerson + '.';
 }
}



function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  }

 return 'The line is currently: 1. ' + line[0] +', 2. ' + line[1]  +', 3. ' + line[2];
}
