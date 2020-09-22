function takeANumber(lineOfCust, cust) { //lineOfCust is an array
  lineOfCust.push(cust);  //add last customer
  var placeInLine = lineOfCust.length;
  return `Welcome, ${cust}. You are number ${placeInLine} in line.`; //return last customer
}


function nowServing (line) { //should take in line array & return first person in line then remove

  if (line.length === 0) { //if array/line is empty
    return `There is nobody waiting to be served!`;
  }

  for (var i = 0; i < line.length; i++) {
    var cust = line[i];
    line = line.shift(); //remove first customer in line [aka element in arr], since been served
    return `Currently serving ${cust}.`;
  }
}


function currentLine (line) {
  var lineStr = `The line is currently: `;
  
  if (line.length === 0) { 
    return `The line is currently empty.`;
  }

  for (var i = 0; i < line.length; i++) {
    var cust = line[i];
    
    // i + 1 since i is the index
    if (i !== line.length - 1) { //customer's place in line, and comma after
    lineStr += (i + 1) + `. ${cust}, `;
    
    } else {  //no comma after  last customer
      lineStr += (i + 1) + `. ${cust}`;
    }
  }

  return lineStr;
}
