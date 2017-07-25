
// The first function passes an array and a string as parameters and returns a string with the person's position in line.
function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson); // Appends the new person to the array
  var positionInLine = katzDeliLine.length; // Retrieves the length of the array and stores it as a variable
  return "Welcome, " + newPerson + ". You are number " + positionInLine + " in line."; //Returns a string including the person added and their position in line
}

// The second function passes an array as a parameter and returns a string formatted with the name of the person being served
function nowServing(katzDeliLine){
  if (katzDeliLine.length){ // If the array has any elements in it, the following code is executed
    var firstPerson = katzDeliLine.shift(); // Removes the first person's name and stores it as a variable
    return "Currently serving " + firstPerson + "."; // Returns the name of the person who was removed from the array
  }
  else return "There is nobody waiting to be served!"; // If the array is empty, it returns this
}

// The final function passes an array as a parameter and returns a string with the current elements in the array and their position
function currentLine(katzDeliLine){
  var text = "The line is currently: "; // Initializes a string with the beginning part of the text to be returned
  if (katzDeliLine.length){ // Executes the following code if the array is not empty
    for (var i = 1; i < katzDeliLine.length; i++){ // This for loop goes through each element of the array
      text += i + ". " + katzDeliLine[i - 1] + ", ";
      // For each element, the index of the element and the element itself are formatted and appended into the previous string
    }
    text += i + ". " + katzDeliLine[i - 1]; // The final iteration appends the same line without the comma, marking the end
    return text; // The string with the current people and their position in line is returned
  }
  else return "The line is currently empty."; // If the array is empty, this string is returned
}
