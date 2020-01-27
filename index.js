const takeANumber = (line,name) => {
  // Add new person (param: name) to the end of the line array
  line.push(name);
  // Use 'line.indexOf(name)' to retrieve that person's index in the array and '+1' since normies dont like  counting from zero I guess
  return 'Welcome, ' + name + '. You are number ' + (line.indexOf(name) + 1) + ' in line.';
};

const nowServing = line => {
  if ( line.length === 0 ) { return 'There is nobody waiting to be served!'; } // Array is empty
  else {
    const name = line[0]; // Store name at index 0 in variable name
    line.shift(); // remove index zero prior to the return statement
    return 'Currently serving ' + name + '.'; // line[0] would no longer reference the name we need here
  }
};

const currentLine = line => {
  if (line.length === 0 ) { return 'The line is currently empty.'; }
  else {
    let output = 'The line is currently: '; // Beginning of the string we will return 
    for ( let i = 0; i < line.length; i++ ) {
      // If ( line[i+1] ) returns truthy, add to 'output' the name at that index plus a comma
      if ( line[i+1] ) { output += `${i+1}. ${line[i]}, ` }
      // Otherwise its the last name in the list and we don't want the comma
      else { output += `${i+1}. ${line[i]}` }
    }
    return output;
  }
}