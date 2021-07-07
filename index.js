//Code written by Carl Reiser 3/29/18

//Initialize deli line array
var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  //Push function adds name to the end of the array
  katzDeliLine.push(name)
  //Return name and number in line
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  //Condition checks to make sure deli line is not empty
  if(katzDeliLine.length > 0) {
    //Shift function takes first element out of array and returns it
    return "Currently serving " + katzDeliLine.shift() + "."
  }
  //Condition where deli line is of length 0
  return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine) {
  //Check to see if deli line is empty
  if(katzDeliLine.length > 0) {
    //initializing printline so it is not repeated in loop
    var printLine = "The line is currently: "
    //loop appends names to string to present current line
    for(var i = 0; i < katzDeliLine.length; i++) {
      //If statement checks to see if it the last element of the list
      if(i < katzDeliLine.length-1){
        printLine += i+1 + ". " + katzDeliLine[i] + ", "
      }
      //Last element of the list condition, do not add a comma because list terminates
      else {
        printLine += i+1 + ". " + katzDeliLine[i]
      }
    }
    //fully concatenated string is returned after loop function
    return printLine
  }
  //Line is empty (loop never executes)
  else {
    return "The line is currently empty."
  }
}
