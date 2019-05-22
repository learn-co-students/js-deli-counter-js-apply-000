function takeANumber(curline, person) {
  
  // add the new person to the end of the line
  curline.push(person);
  
  // have already added the person, so can just use the length 
  return 'Welcome, ' + person + '. You are number '+curline.length + ' in line.';
}

function nowServing(katzDeliLine) {
  
  // return appropriate message if no one in line 
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  
  // save off the person being served before removing from the array
  var serve = katzDeliLine[0];
  katzDeliLine.shift();
  
  return 'Currently serving ' + serve + '.';
  
}

function currentLine(curline) {
  
  // save a little bit of typing by having message start here
  var str = 'The line is currently';
  
  // return proper message if no one in line 
  if (curline.length === 0) {
    return str + ' empty.';
  }
  // pretty sure you could use forEach method to be cleaner,
  // but this seems relatively similar in length of code
  else {
    str += ':';
    // set j once as a variable for the length 
    // use i starting at 1, seems cleaner for the string 
    for (var i = 1, j = curline.length; i <= j; i++) {
      str += ' ' + i + '. ' + curline[i-1] + ',';
    }
  }
  // need to clear out the comma at the end, so get rid of the last character
  return str.substr(0,str.length-1);
}