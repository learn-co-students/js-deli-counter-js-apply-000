/*1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept two paramaters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as `"Welcome, Ada. You are number 1 in line."`. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.*/

function takeANumber(currentLine, newName) {
  let number = currentLine.length + 1;
  let welcomeMessage = `Welcome, ${newName}. You are number ${number} in line.`;
  currentLine.push(newName);
  return welcomeMessage;
}

/* 2. Build a function `nowServing`. This function should accept the current line of people (`katzDeliLine`) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!" */

function nowServing(currentLine) {
  if (currentLine.length > 0) {   
    // check to see if there is someone in line, length will be larger than 0 if there is a line... if yes, continue
  
  let announcement = `Currently serving ${currentLine[0]}.`;  
  // announce the first person in line (index 0) is being served. (necessary to do before you remove them)
  
  currentLine.shift(); 
  // remove the first person and return them... index 0.
    
    return announcement;
    // announce the first person in line is being served
  }
  else {
    return "There is nobody waiting to be served!";
    // earlier checked to see if there was someone in line, if there is no one in line, let us know with quote above
  }
}


/* 3. Build a function `currentLine` that accepts the current line of people and returns the current line as a string; for example, if 'katzDeliLine' is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  You don't have to use `katzDeliLine` as a variable or parameter name in your function though, it's just an example of a variable that might be passed to it. If there is nobody in line, it should return `"The line is currently empty."` */

function  currentLine(currentLineOfPeople) {
 
  let numList = [];
  // create numList variable to hold empty array, need to create before loop to get correct return later
  
  if (currentLineOfPeople.length > 0) {
  // are there more than 0 people in line/ is there a line. if yes, run loop below.
  
    for (let i = 0; i < currentLineOfPeople.length; i++) {
     // loop through the line of people, use i as counter variable/index tracker to access every person in line.
     
     numList.push(` ${i + 1}. ${currentLineOfPeople[i]}`);
     //add the string/text of (1. Bill == i+1(we want to give place in line, not index) and name of person in line.
     // *important* to  one space at start of `string` above, so the final return matches. 
    }
    
    console.log(numList);
    return `The line is currently:${numList}`;
    // finally, return/ let people know current line of people, in an ordered list 
  }
  
  else {
    // we checked if the line had people in it earlier, in this case the line is empty, we tell people line = empty
    return "The line is currently empty."
  }
}