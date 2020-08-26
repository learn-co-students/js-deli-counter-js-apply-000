/*      TAKE A NUMBER FUNCTION     */



function takeANumber(currentLine, newName) {
  
  /* 
  This line adds the given name to the given array, which is empty. 
  
  The push method is used in case IF there are multiple names, the names retain their order from first in to last in, like a queue 
  */
  
  currentLine.push(newName);
  
  
  // Once the name is added into the array, this finds the index number of the person we want to make an announcement for
  var position = currentLine.indexOf(newName);
  
  
  // Builds the announcement with the name passed through and their position + 1, which is their index number plus 1 for their true position in line
  var greeting = "Welcome, " + newName + ". You are number " + (position + 1) + " in line."; 
  
  
  return greeting
  
}



/*      NOW SERVING FUNCTION    */



function nowServing(currentLine) {
  
  // Gets the name of the first person in line
  var firstPerson = currentLine.shift();
  
  
  // In case the line is empty
  if (currentLine.length === 0){
    
    return  "There is nobody waiting to be served!"
    
  }
  
  
  else {
    
    return "Currently serving " + firstPerson + "."}
}



/*      CURRENT LINE FUNCTION     */



function currentLine(lineofPeople) {
  
  // Keeps track of the total number of people in line
  
    var numTotalPeople = lineofPeople.length;
    
    

    var currentLineAnnouncement = "The line is currently: ";
  
  
  
  // In case there is no one in line
  
  if (lineofPeople.length === 0){
    return "The line is currently empty."
  }
  
  
  
  else{
  
    // In order to build the announcement, we need to:
  
  
    for (var i = 0; i < (numTotalPeople); i++) {

    // Get the names of the people in line in order, by removing their names from the original array (lineofPeople) front to back
  
  
      var peopleShiftedFromArray = lineofPeople.shift(i);
      

    // (this is incase it's the last person in line - No need to add a comma)
    
      if (i === numTotalPeople - 1){
       currentLineAnnouncement += (i+1) + ". " + peopleShiftedFromArray;
      }
    
    
      // and then add the name onto our announcment along with their positions
      // the counter "i" acts as their index number, so we add 1 to it in order to
      // show their true positions in line
  
      else{
      currentLineAnnouncement += (i+1) + ". " + peopleShiftedFromArray + ", ";
      }
  
      // once the announcment is complete, the iteration loops again to add on 
      // the rest of the people to the announcment, one by one.

}

return(currentLineAnnouncement)
    
    
  }
}







