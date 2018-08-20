function takeANumber (katzDeliLine, name) 
//the function 'takeANumber' accepts two parameters: the array 'katzDeliLine' and the string 'name'.
{
  katzDeliLine.push(name) 
  // this adds a new element, the new customer's name, to the existing list of customers.
  
  return("Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.") 
  // the function 'takeANumber' returns a welcome phrase that addresses the new customer by name and informs them of their position in the queue by returning the current length of the line using the 'length' property.
}

function nowServing (katzDeliLine) 
//the function 'nowServing' accepts the parameter of the array 'katzDeliLine'
{
  if (katzDeliLine.length > 0) 
  //the 'if' statement creates a condition.  In this is case, if the queue is longer that zero, i.e. there are people in the queue, then the following will occur.
  
  {return "Currently serving " + katzDeliLine.shift() + "." 
  // this is the statement that will be returned, the .shift method returns and removes the first element in an array, so that once a person is being served, they are no longer in the queue.
  }
  else {return ("There is nobody waiting to be served!")}
  // if the queue is not longer than zero, it does not exist and the statement is returned confirming there is nobody in the queue.
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
    // if 'line' does not have a length (negated by !) then there is nobody in the queue and a string is returned stating this.
  }

  const numbersAndNames = []
  //the constant is defined as an empty array to be used in the below for loop.

  for (let i = 0; i < line.length; i++) 
  // this for loop, begins when the index value i = 0, and continues for as long as the index value is less than the length of the queue (i.e. until it reaches the end of the queue of customers), and continues in increments to the next index value (the next person in the queue).
  {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
    //the .push method here, inserts an element into the array, numbersAndNames.  It will insert the index value, i + 1, to inform the customer of their position in the queue.  It will follow this number with the corresponding person's name by accessing the variable 'line' at the index value'i'. 
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
  // this string is returned with interpolation of the constant array 'numbersAndNames' using the method '.join' to list all elements in a string.  Each element will be separated by a comma + space rather than just a comma, which is the default for the .join method.
}