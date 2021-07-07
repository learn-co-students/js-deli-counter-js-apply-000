function takeANumber (deliLineArray, name) {
  var welcomeMessage = `Welcome, ${name}. You are number ${deliLineArray.length + 1} in line.`;
  
  // The push() method adds a new element to an array (at the end):
  deliLineArray.push(name);
  return welcomeMessage;
} 

function nowServing (deliLineArray) {
  if (deliLineArray.length === 0) { 
    return "There is nobody waiting to be served!";
  } else {
    var firstInLine = deliLineArray[0];
    
    // The shift() method removes the first array element and "shifts" all other elements to a lower index.
    deliLineArray.shift();
    return `Currently serving ${firstInLine}.`;
  }
}

function currentLine (deliLineArray) {
  if (deliLineArray.length === 0) { 
    return "The line is currently empty.";
  } else {
    
    // Create the numbered list for the return String
    // We know there is at least one term in the array so add that right away
    var i = 0;
    var currentLineString = "";
    currentLineString = currentLineString.concat(i + 1, ". ", deliLineArray[i]); 
    
    // If the array is more than one term, then we need a comma and another numbered item for every remaining term of the array
    if (deliLineArray.length > 1) {
      // first increment i
      i++
      
      // then loop to add additional terms and increment i until it maxes out the array
      do {
        currentLineString = currentLineString.concat(", ", i + 1, ". ", deliLineArray[i]);
        i++;
      }
      while (i < deliLineArray.length);
    }  
    
    // return the string
    return `The line is currently: ${currentLineString}`;
  }
}