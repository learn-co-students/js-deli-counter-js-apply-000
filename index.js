// Deli Counter Lab
// Laura Nadolski
// 4/8/18


// This is the code to help our deli run. It helps keep track
// of the current line of customers.

var katzDeliLine = [];

// takeANumber() accepts the current line of people and the new
// person's name as arguments, and returns their position in line.

function takeANumber(katzDeliLine, newname) {
  katzDeliLine.push(newname);
  return `Welcome, ${newname}. You are number ${katzDeliLine.length} in line.`;
}

// nowServing() returns the first person in line, and then
// removes that person from the line. Alerts user to empty
// line if that's the case.

function nowServing(katzDeliLine) {
 var upnext = katzDeliLine[0];
 if (0 === katzDeliLine.length) {
   return "There is nobody waiting to be served!";
 }
 else {
   katzDeliLine.shift();
   return `Currently serving ${upnext}.`;
 }
}

// currentLine() returns the people in the current line. If the
// line is in fact empty, it tells the user as much.

function currentLine(katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    var helperarray = [];
    while (katzDeliLine.length > 0) {
      helperarray.unshift(` ${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`);
      katzDeliLine.pop();
    }
    return "The line is currently:" + helperarray;
  }
  else {
    return "The line is currently empty.";
  }
}