var katzDeli = []; // there are no people at the beginning of the day, thus an empty array 

function takeANumber ( katzDeli, newPersonName ) {
  katzDeli.push(`${newPersonName}`);
  return(`Welcome, ${newPersonName}. You are number ${katzDeli.length} in line.`);// this will show the number in line the customer is and their name 
}

function nowServing ( katzDeli ) {//this function will state who the first person in line 
  var i = 0;
  while ( i < katzDeli.length ) {
    i++;
  }
  if (katzDeli.length === 0) {
  return "There is nobody waiting to be served!"
  }
  else 
  return (`Currently serving ${katzDeli.shift()}.`);
}

var line = [] ;

function currentLine ( katzDeli ) { //this function will list the customer's in order with their number in line
  
  var i = 0;
  while (i < katzDeli.length ) {
    line.push(" " + [i+1] + ". " + katzDeli[i])
    i++;
  }
  if (katzDeli.length === 0) {
  return "The line is currently empty."
  }
  else
  return ("The line is currently:" + line);
}


