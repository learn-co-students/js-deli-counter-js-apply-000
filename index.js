function takeANumber(line, customerName) {
    // add customers to the line
    line.push(customerName);
    return "Welcome, " + customerName + "." + " You are number " + line.length
  + " in line.";
  }

function nowServing(line) {
  // if there are people in the line
  if (line.length > 0) {
    // serve the current person in the line
    var announcement = "Currently serving " + line[0] + ".";
    // remove the current person from the line
    line.shift();
    // return the person who was just served from the line
    return announcement;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var announcement = "The line is currently: ";
    for (var x = 0; x < line.length; x++) {
      announcement += x+1 + "." + " " + line[x];
      // if there are multiple people in line, add commas
      if ((x + 1) < line.length) {
        announcement += ", ";
      }
    }
    return announcement;
  }
}
