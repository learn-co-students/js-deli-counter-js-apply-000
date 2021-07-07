function takeANumber(katzDeli, name) {
  katzDeli = katzDeli.push(name); //append new names in name array to end of existing katzDeli array. This alters the length of the katzDeli array i.e. destructive
  var welcomeMessage = "Welcome, " + name + ". You are number " + katzDeli + " in line."; 
    //concatenate strings to make welcome message
    //use the new length of the katzDeli array
  return welcomeMessage;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0) {
    var currentPerson = katzDeliLine.shift(); //the first person in the line while also removing this person from the list of people waiting i.e. destructive
    return "Currently serving " + currentPerson + "."
  }
  if (katzDeliLine.length===0) {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  let i=0;
  if (katzDeliLine.length>0) {
    var announcement = "The line is currently: "
    for (i=0; i<katzDeliLine.length; i++) {
      announcement = announcement + (i+1) + ". " + katzDeliLine[i] 
      if (i<katzDeliLine.length-1) {
        announcement = announcement + ", "//for all persons except the last person, also add a comma after their name
      }
    }
    return announcement
  }
  if (katzDeliLine.length===0) {
    announcement = "The line is currently empty.";
    return announcement;
  }
}



