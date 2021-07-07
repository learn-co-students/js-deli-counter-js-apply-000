function currentLine(line) {
  var lineOfPeople = [];
  if(line.length === 0) {
    return `The line is currently empty.`
  }
    for(var i = 0; i < line.length; i++) {        //the length is 3, but the index starts at zero. Remember the +1 nature of index #'s
      lineOfPeople.push(` ${i+1}. ${line[i]}`);  //i+1 makes the number in line accurate, so line[0] will be written as 1. John, 2. Joe, etc.
    }
    return `The line is currently:${lineOfPeople}`;
  }

function takeANumber(line,name) {
  line.push(name);                                                   //push puts the parameter name at the end of parameter line
  return `Welcome, ${name}. You are number ${line.length} in line.` //simple interpolation ${}
}

function nowServing(line) {
  if(line.length === 0) {
    return `There is nobody waiting to be served!`
  }
  else {
    return `Currently serving ${line.shift()}.`  //takes item from beginning of array via shift
  }
}
