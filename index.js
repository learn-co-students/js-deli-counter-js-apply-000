function takeANumber(line, customerName) {
    // provide actual position in line & not index
    var position = line.length + 1;
    // add customer names to line 
    line.push(customerName);
    return "Welcome, " + customerName + "." + " You are number " + position
  + " in line.";
  }
  
  function nowServing(line) {
    if (line.length > 0) {
      var announcement = "Currently serving " + line[0] + ".";
      line.shift();
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
        if ((x + 1) < line.length) {
          announcement += ", ";
        }
      }
      return announcement;
    }
  }