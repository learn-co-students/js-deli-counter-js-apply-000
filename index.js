var katzDeli = [];
// 1. Defines the global variable 'katzDeli'
      // Assigns 'katzDeli' an empty array

function takeANumber(katzDeli,name){
  // 1. Defines the function 'takeANumber' that will be used when a new person enters the deli
      //'takeANumber' accepts two parameters, 'katzDeli' and 'name'
  
  katzDeli.push(`${name}`);
  // 2. Adds the entered name to the end of the 'katzDeli' array

  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}
// 3. Returns the string 'Welcome, ${name}. Your are number ${katzDeli.length} in line.'
      // Because the phrase is wrapped in back ticks, the interpolation '${name}' will return the entered name as a string
      // The interpolation ${katzDeli.length} will return the length of the array as a string
          // This technique returns the actual number of people added to the line
          // Calling the position of the name in the array (the index) would have returned their position as one less

function nowServing(katzDeli){
  // 1. Defines the function 'nowServing' that will give the next person in line and then remove that person from the queue
      //'nowServing' accepts one parameter, 'katzDeli', the contents of which are pulled from 'takeANumber' above
  
  let i = 0;
  // 2. Defines the local variable 'i' WITHIN 'nowServing'
      // Assigns 'i' the integer 0
  
  while (i < katzDeli.length){
    i++;
  }
  // 3. Executes a while loop
      // Condition: confirms that 'i' is less than the count of names added to 'katzDeli'. If boolean true, the loop is executed.
      // Loop Body: i++ increments the control variable 'i'
  
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    return (`Currently serving ${katzDeli.shift()}.`);
  }
}
// 4. Executes control flow conditionals
      // If statement: if there is nobody in the deli line (i.e. no 'name' has been added to the 'katzDeli' via the 'takeANumber' function), 'nowServing' returns the string 'There is nobody waiting to be served'
      // Else statement: as long as there are more than zero people in the deli line, 'nowServing' returns the string "Currently serving ${katzDeli.shift()}".
            // The shift() function returns the first name in the 'katzDeli' array and then removes that name
            // Because the phrase is wrapped in back ticks, the interpolation will return the first name as a string


function currentLine(katzDeli){
  // 1. Defines the function 'currentLine' that will return the current line of names with their position in the line
      //'currentLine' accepts one parameter, 'katzDeli', the contents of which are pulled from 'nowServing' above
  
  var line = [];
  // 2. Defines the local variable 'line' WITHIN the 'currentLine' function
      //Assigns 'line' an empty array
  
  for(let i = 0; i < katzDeli.length;) {
    line.push(`${i + 1}. ${katzDeli[i]}`);
    i++;
  }
  // 3. Executes a for loop
      // Initializtion: defines 'i' as the control variable and assigns it the integer 0
      // Condition: confirms that 'i' is less than the count of names in 'katzDeli'. If boolean true, the loop is executed.
      // Loop Body: as the loop iterates, adds a string to the end of the array 'line'
            // The interpolation ${i + 1} takes the index of the name in question and adds one to give the true position of the name in the array.
            // The interpolation ${katzDeli[i]} returns the name in the 'katzDeli' array at the index in question
      // Iteration: i++ increments the control variable 'i' after the loop is executed
  
  if (katzDeli.length === 0){
    return "The line is currently empty.";
  }
  else {
    return `The line is currently: ${line.join(', ')}`;
  }
}
// 4. Executes control flow conditionals
      // If statement: if there is nobody in the deli line (i.e. no 'name' has been added to the 'katzDeli' via the 'takeANumber' function), 'currentLine' returns the string 'The line is currently empty.'
      // Else statement: as long as there are more than zero people in the deli line, 'nowServing' returns the string "The line is currently: ${line.join(', ')}"
            //The join() function joins the elements in array and returns the entire array as a string