function takeANumber( katzDeliLine, name ) {
  // adds name to end of katzDeliLine array
  katzDeliLine.push( name );
  // gets the length of katzDeliLine after a name has been added
  var num = katzDeliLine.length;
  // returns a welcome message that includes the current persons name and their number
  return `Welcome, ${name}. You are number ${num} in line.`;
}

function nowServing( katzDeliLine ) {
  if ( katzDeliLine.length === 0 ) {
    // returns the line is empty when no one is on line
    return `There is nobody waiting to be served!`;
  } else {
    // returns an announcement about the person it is serving (the first name in the array)
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine( line ) {
  if ( line.length === 0 ) {
    // returns "The line is currently empty." if no one is in line
    return `The line is currently empty.`;
  } else {
    // If there is only one person in line, "saysWho" will only be the first name in "line"
    var saysWho = `The line is currently: 1. ${line[0]}`;
    // for loop to iterate through "line" if it's length is more than 1
    for ( var i = 1; i < line.length; i++ ) {
      // adds current index of "line" + 1 (to return correct number since arrays are zero-indexed) and current "line" name to "saysWho" for each person in "line"
      saysWho += `, ${i + 1}. ${line[i]}`;
    }
    return saysWho;
  }
}
