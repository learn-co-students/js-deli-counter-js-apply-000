function takeANumber(katzDeli, otherDeli) {
  katzDeli.push(otherDeli);
  return `Welcome, ${otherDeli}. You are number ${katzDeli.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length >= 1) {
    let serving = deliLine[0];
    deliLine.shift();
    return 'Currently serving ' + serving + '.';
  }
  do {
    return 'There is nobody waiting to be served!';
  } while (!deliLine.length);
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty.";
  }
  var inLine = [];
  for (let i = 0; i < line.length; i++) {
    inLine.push(` ${i+1}. ${line[i]}`);
  }
  var result = "The line is currently:" + inLine;
    return result.toString();
}



//in nowServing
//Not sure if there is any advantage or disadvantage for using a do while loop here instead of an if statement, but it worked so I decided to use it.

//Suggested solution for nowServing.
//(same idea, just simplified):
/* function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}; */



//in currentLine
// return `The line is currently: ${numbersAndNames.join(', ')}`
// Was used in the sugested solution. It simplifies my last two lines into one.



//WORK FROM PREVIOUS ATTEMPT & NOTES FROM FIRST TECHNICAL INTERVIEW ARE COMMENTED OUT HERE:

/* 
//Previous Attempt:
const katzDeliLine = [];
let newNumber = 0;

function takeANumber(katzDeli, otherDeli) {
  katzDeli.push(otherDeli);
  return `Welcome, `+ otherDeli + `. You are number ` + katzDe.length + ` in line.`;
}

function nowServing(deliLine) {
    if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
    }
    for (let i = 0; i < deliLine.length; i++) {
    let serving = deliLine[0];
    deliLine.shift();
    return "Currently serving " + serving + ".";
    }
}

function currentLine(line) {
    if (line.length === 0) {
    return "The line is currently empty.";
    }
    if (line.length !== 0) {
    const displayCustomers = [];
    for (let i = 0; i < line.length; i++) {
    `${i + 1}. ${line[i]}`
    }
    return "The line is currently: 1. " + line[0] + ", 2. " + line[1] + ", 3. " + line[2];
    }
}
*/

/*
//Notes and work from first technical interview:
i++
i = i + 1
function takeANumber() {
  newNumber = newNumber + 1;
  katzDeliLine.push(newNumber);
  return `Welcome. You are number ` + newNumber;
}
How do you use displayCustomers to create everything from (1. " + line[0] + ", 2. " + line[1] + ", 3. " + line[2];)
do something else to displaycustomers to get it to print in this way
*/