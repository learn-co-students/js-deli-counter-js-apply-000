function takeANumber(deliLine, name) {
  deliLine.push(name);
  return "Welcome, " + name +". You are number " + (deliLine.length) + " in line.";

}
function nowServing(deliLine){
  if (deliLine.length > 0) {
    var firstInLine = deliLine.splice(0, 1);
    var response = "Currently serving " + firstInLine +".";
return response;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(deliLine) {
  var stringOfCustomers = "The line is currently: ";
  if (deliLine.length > 0){
    for (var i = 0; i < deliLine.length; i++){
      if (i > 0){
        stringOfCustomers += ", ";
      }
      stringOfCustomers += (i+1) + ". " + deliLine[i];
    }

    return stringOfCustomers;
  } else {

    return "The line is currently empty.";

  }
}
