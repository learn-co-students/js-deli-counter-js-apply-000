function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return("Welcome, " + newPerson + ". You are number " + (katzDeliLine.length) + " in line.");
}

function nowServing(katzDeliLine) {
  var firstPerson = katzDeliLine[0];
  
  if (katzDeliLine.length === 0) {
    return("There is nobody waiting to be served!");
  } else {
    katzDeliLine.shift();
    return("Currently serving " + firstPerson + ".");
  }
    
}

function currentLine(katzDeliLine) {
  var i;
  var listPeople = "The line is currently";

  if (katzDeliLine.length === 0) {
    return(listPeople + " empty.")
  } else {
      listPeople = listPeople + ":"
      for (i = 0; i < katzDeliLine.length; i++) {
        if (i > 0) { 
          listPeople = listPeople + ","
        }
        listPeople = listPeople + " " + (i+1) + ". " + katzDeliLine[i]
    }
    return(listPeople)
  }
}