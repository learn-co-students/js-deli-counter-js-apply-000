function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  return "Welcome, " + customer + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(deliLine) {
  var first = deliLine.shift()
  if (deliLine.length === 0){
    return "There is nobody waiting to be served!"
}
  if (deliLine.length > 0)
    return "Currently serving " + first + "."
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  var serve = "";
  //creates empty string to store customers and their placements
  var place = 0;
  // used to store placement in line
  var i = 0;
    for (i=0; i<katzDeliLine.length; i++) {
      place = katzDeliLine.indexOf(katzDeliLine[i]) + 1
      // for loop to used to create the line of customers and their place
      // indexOf katzDeliLine array to determine the placement
      if (i<katzDeliLine.length-1) {
      serve = serve + place.toString() + ". " + katzDeliLine[i] + ", "
      }
      else {
      serve = serve + place.toString() + ". " + katzDeliLine[i]
    }
  }
  return ("The line is currently: " + serve)
}
