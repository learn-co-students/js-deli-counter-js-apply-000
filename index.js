var katzDeliLine = []; // Line at Katz deli is empty so an empty array is used
 function takeANumber(katzDeliLine, name){
   var position = katzDeliLine.length+1 //Added Position var to because array starts at 0 so add 1 to get real place in line
   katzDeliLine.push(name);
   return "Welcome, " + name + ". You are number " + position + " in line."

 }
  function nowServing(katzDeliLine){
    if (katzDeliLine.length === 0){
      return "There is nobody waiting to be served!";
    } else {
      return ("Currently serving " + katzDeliLine.shift() + ".")
    }
  }
  function currentLine(katzDeliLine){
    if (katzDeliLine.length === 0){
      return "The line is currently empty.";
    }else {
      var currentLineString = [];
      for (var i = 0; i < katzDeliLine.length; i++) {
        currentLineString.push(i + 1 + '. ' + katzDeliLine[i]);
      }
      return "The line is currently: " + currentLineString.join(", "); // use join to add a seperator for the position in line with the name
    }
  }
