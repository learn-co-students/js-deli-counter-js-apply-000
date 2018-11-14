

function takeANumber(katzDeliLine, name){
katzDeliLine.push(name)  //will push the name to the end of the array
//return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`  //The .length method returns the length of the array on which the method is operated.
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
    }
    else {
      /*
      var shiftLine = katzDeliLine.shift(0);   //The .shift method in Javascript removes the first item of an array & then RETURNS that item
      return "Currently serving " + shiftLine + ".";
      */
     return "Currently serving " + katzDeliLine.shift(0) + ".";
    /*
    else {
    var name = katzDeliLine[0];  // who is at index 0?
    katzDeliLine.splice(0,1)  // removes the fist person in the line at index 0
    // return "Currently serving " + name + ".";
    return `Currently serving ${name}.`;
    */
  }
}

function currentLine(katzDeliLine) {
  var line = []
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
    }
  else {
         for (var i=0; i<katzDeliLine.length; i++) {
         line += (i+1) + ". " +katzDeliLine[i] + ", "
         }
         line = line.slice(0, line.length-2);
    // return "The line is currently: " + currentLine
    return `The line is currently: ${line}`;
  }
}
