function takeANumber(Line, CustName) {
  Line.push(CustName); //.push() method adds new items to the end of an array, and returns the new length
  //console.log("Welcome, " + CustName + ". You are number " +Line.length + " in line.");
  return "Welcome, " + CustName +". You are number " +Line.length + " in line.";
}

function nowServing (Line){
if (Line.length === 0) {
  return "There is nobody waiting to be served!";
}
else {
  return "Currently serving " + Line.shift() +".";  //.shift removes the first element from an array and returns that removed element
}
}

function currentLine (Line){
  if (Line.length === 0) { //triple "===" sign compares both value and type, whereas double "==" sign compares only value (either or both operands are converted to a common type)
    return "The line is currently empty.";
  }
  else {
    var WhoIsInLine = [];
    for (var i = 0; i<Line.length; i++) {
      WhoIsInLine.push(i + 1 +". " + Line[i]); //.push() method adds new items to the end of an array, and returns the new length
    }
  return "The line is currently: " + WhoIsInLine.join(', '); //.join joins the elements of an array into a string, and returns the string
  }
}
