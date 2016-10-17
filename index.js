function takeANumber(lineOfPeople, newCustomerName){
  lineOfPeople.push(newCustomerName);
  var newCustomerNumber = lineOfPeople.length;
  return "Welcome, " + newCustomerName + ". You are number " + newCustomerNumber + " in line.";
}

function nowServing(lineOfPeople){
  if (lineOfPeople.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var servingCustomer = lineOfPeople.shift();
    return "Currently serving "  + servingCustomer + ".";
  }
}

function currentLine(lineOfPeople) {
  if (lineOfPeople.length === 0){
    return "The line is currently empty.";
  } else {
    var length = lineOfPeople.length;
    var text = "The line is currently: ";
      for (var i=0; i < length; i++){
      if (i < (length - 1) ){
        text += (i+1) + ". " + lineOfPeople[i] + ", ";
      } else {
        text += (i+1) + ". " + lineOfPeople[i];
      }
    }
    return text;
  }
}
