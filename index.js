function takeANumber(linePos, personName) {
/*********************************************************************
/Creates a function called takeANumber with two parameters:
/linePos (person's position in line) and personName (self-explanatory)
*********************************************************************/
  
  linePos.push(personName); 
  //adds the element (personName) to the end of the array
  
  
  return `Welcome, ${personName}. You are number ${linePos.length} in line.`;
  // writes out a string which uses template literals. The .length property finds how many elements
  // are in linePos. Reminder: .length does not start at 0, unlike index counters. 
  
}

function nowServing(katzDeliLine) {
/********************************************************
/Creates a function called nowServing with one parameter:
/katzDeliLine (an array which contains the current # of people in line)
*********************************************************/
  if (katzDeliLine.length === 0) 
  {
    return "There is nobody waiting to be served!";
  } 
  //If the # of people in the katzDeliLine array is 0, then a string will be returned.
  else 
  {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  //Otherwise, a differens string will be returned which uses the .shift property.
  //The .shift() method removes the first element from the array katzDeliLine, and then
  //returns the removed array. 
}

function currentLine(katzDeliLine) {
/********************************************************
/Creates a function called currentLine with one parameter:
/katzDeliLine (again contains the current # of people in line)
**********************************************************/
  
  const LinePosAndName = [];
  //creates a constant, an empty array, that can only be referenced in the function of currentLine
  
  if (!katzDeliLine.length) {
    return "The line is currently empty.";
  }
  //using ! along with .length means if there is no length, or .length === 0,
  //a string will be returned. 
  
  for (let i = 0, l = katzDeliLine.length; i < l; i++) {
    LinePosAndName.push(`${i + 1}. ${katzDeliLine[i]}`);
  }
  //creates an index counter to iterate through each person's position in line and their name 
  //The first person entering would then have their position and name added to the empty array.
  //If a second person joins, the same would be done but their position would move up 1 since
  //katzDeliLine.length is now = 2, so 1 more is added to i. 
  //To reiterate, the .push() property adds an element to the end of an array - in this case
  //the LinePosAndName array.
  
  return `The line is currently: ${LinePosAndName.join(', ')}`;
  //This simply returns the string with a template literal, which prints out the constant array
  //LinePosAndName along with any new person that has entered. The .join() method takes the array
  //and recreates it but concatenates the elements within the array - then finally returning the
  //entire array.
}