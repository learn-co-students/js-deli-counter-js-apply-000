function takeANumber (katzDeliLine, newPersonsName){
  katzDeliLine.push (newPersonsName);
  return ("Welcome, " + newPersonsName + "." + " You are number " + katzDeliLine.length + " in line.");
}
function nowServing (deliLine){
if (deliLine.length === 0) {
return ("There is nobody waiting to be served!");
}
var person = deliLine.shift ();
return ("Currently serving ") + person + "."
}
function currentLine (katzDeliLine){
  var person = katzDeliLine;
  if (katzDeliLine.length > 0 ) {
    var line_people = [];
    for (var i=0; i<katzDeliLine.length; i++) {
      line_people.push((i+1) + ". " + katzDeliLine[i]);
    }
    return "The line is currently: " + line_people.join(', ');
  }
  if (katzDeliLine.length === 0){
    return ("The line is currently empty.");
  }
  }
