var katzDeliLine = [];

// 1.
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

// In order to return "Welcome, Ada. You are number 1 in line.", we need to build a function that returns two parameters- katzDeliLine and name (line 3)

// For each new customer entering, we need to add their name to the end of the line. We do this by pushing their name to the end of katzDeliLine (line 4)

// Now, we want to return the final sentence. We begin with a return statement, followed by a template literal. Next, We want the customers name and place in line to change given their position.

    // To show the variables, we use ${}. To return the name, we use ${name}. To find their place in line, we need to find the length of the line. This is done by using katzDeliLine.length


// 2.
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nowServing = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${nowServing}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

// This function should first be broken down into two parts:  1. Currently serving (if) 2. Nobody in line (else)

// Currently serving (lines 20-23) : The goal is to write a function that accepts the current line of people, returns the first person in line, then removes that person from the line.

    // (Line 20) In order for this to work, there needs to be people in line. We can begin our "if" statement with (if (katzDeliLine.length > 0)) to determine that. 
   
    // (Line 21) Next, we need to set a variable to return the first item in the array                               (var nowServing = katzDeliLine[0];)
        
        // (line 22) We then want to remove the first item in the array in order to show the next person in line. katzDeliLine.shift()
        
    // Finally, we want to return the sentence (return `Currently serving ${nowServing}.`)
    
// Nobody in line (line 24-25): Referencing back to line 20, we want to return a statement if the line is not greater than 0 (the else statement). For this, we can write  (else {return `There is nobody waiting to be served!`; )
    

// 3.    
function currentLine(line) {
  if (line.length === 0){
   return ('The line is currently empty.')
  } else {
    let status = []
     for (var i = 0; i< line.length; i++){
      status.push(` ${i + 1}. ${line[i]}`)
      }
  return `The line is currently:` + status.join()
  }
}

// Once again, we want to split this function into two parts: 1. The line is empty (if), and 2. The line is currently (else)

// Part 1: The line is currently empty (lines 46-47): If the line is 0 (if (line.length === 0)), we want to tell the customer "The line is currently empty (return ('The line is currently empty.')")

// Part 2: The line is currently (lines 48-53): We begin this with an else statement, meaning the code will run the following arguments when the "if" statement fails. 

  // (lines 49-50) We need to create a variable for the array (status). 
        // (i = 0) creates a variable for the loop
        // (i < line.length) tells the loop to run only if the variable is less than the length of the line
        // (i++) tells the loop to increase by 1 each time the loop is executed
        
    // (line 51) Next, we need to add numbers to the array. We don't want to give them their index number, so we need to add 1 to "i" (${i + 1}). Next, we want to return the name of the person associated with the original index number (${line[i]})
    
    // Finally, we want to concatenate the sentence "The line is currently:" with the number and names we set earlier. The return function should look like (return `The line is currently:` + status.join())
     
      // We use status.join() to represent the array values as a string. 

