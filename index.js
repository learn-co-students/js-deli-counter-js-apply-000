function takeANumber(katzDeliLine,katzDeli){
    katzDeliLine.push(katzDeli);
    return "Welcome, " + katzDeli + ". You are number " + (katzDeliLine.indexOf(katzDeli) + 1) + " in line."
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return "Currently serving " + katzDeliLine.shift() + ".";

  }
   else {
           return "There is nobody waiting to be served!";
          
}
}

function currentLine(katzDeliLine){
    if (katzDeliLine.length > 0){
    var placesPlease = [];
    katzDeliLine.forEach(function(element, index) {
      placesPlease.push(index + 1 + ". " + element);});
  return "The line is currently: " + placesPlease.join(", ");
}
else {
            return "The line is currently empty."
          }
}
