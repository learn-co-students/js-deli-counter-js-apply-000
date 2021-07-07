var katzDeliLine = []; // Line at Katz deli is empty so an empty array is used
 function takeANumber(katzDeliLine, name){
   katzDeliLine.push(name);
   return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."// Used katzDeliLine.length to indecate the correct position in line array lenth is 1 based array index is 0

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
      return "The line is currently: " + currentLineString.join(", "); // use join to add a seperator for the position in line with the name and to return message as a string
    }
  }
