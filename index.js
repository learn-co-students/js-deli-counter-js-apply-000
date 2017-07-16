 var katzDeli = [];

//takeANumber accepts an array (katzDeli) and a string (name of individual in line)
function takeANumber (katzDeliLine, name){
  //Making name final element of array
  katzDeliLine.push(name);
  //Returns a welcome, the name, and position status.
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

//nowServing accepts a deli line array of customers.
function nowServing (katzDeliLine){
  //-->Array is empty. Function returns a string desribing so
  if (katzDeliLine[0] === undefined){
    return "There is nobody waiting to be served!"
  }
  //--> Array with elements
  else {
    //Create local variable that stores first element of array after it is removed.
    var newServingLine = katzDeliLine.shift()
    //returns string and shifted element (current customer) of array.
    return "Currently serving " + newServingLine +"."
  }
}

//currentLine accepts array of customers.
function currentLine (katzDeliLine){
  //-->Array is empty. Function returns a string desribing so
  if (katzDeliLine[0] === undefined) {
    return "The line is currently empty."
  }
  //--> Array with elements
  else {
    //Create an empty variable outside of the scope of the for loop to accumulate the output of the loop.
    var lineText = ""
    //Iterate through array and concatenate place in line (index of array + 1) and name into lineText
    for (var i = 0; i < katzDeliLine.length; i++) {
      lineText = lineText + (i+1) + ". " + katzDeliLine[i] + ", "
      }
      //Remove comma and space from the end our variable lineText
      var newText = lineText.slice(0, -2);
      //Return concatenation of string and variable containing all customers
      return "The line is currently: " + newText
  }
}
