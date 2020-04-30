function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)  //pushes new name to end of array
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line." //returns new customer position in line
}

function nowServing(katzDeliLine, name) {
  if (katzDeliLine.length === 0) { //checks amt of ppl in line
    return "There is nobody waiting to be served!"
  } else {
    var name = katzDeliLine[0]; 
    katzDeliLine.splice(0, 1); //removes 1st person in line and reorganizes
    return "Currently serving " + name + ".";
  }
}

function currentLine(katzDeliLine) {
    var line = []
    if (katzDeliLine.length === 0) { //checks if 0 ppl are in line
      return "The line is currently empty."
    } else {
      for(var i = 0; i < katzDeliLine.length; i++) {//runs through katzDeliLine customer Array 
        line += (i + 1) + ". " + katzDeliLine[i] + ", "//numbers our customers
      } 
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}

