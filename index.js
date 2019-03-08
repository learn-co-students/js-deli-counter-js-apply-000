//takeANumber function:

function takeANumber(katzDeli, otherDeli) {
  katzDeli.push(otherDeli);
  return `Welcome, ${otherDeli}. You are number ${katzDeli.length} in line.`;
}


//nowServing function:

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


//currentLine function:

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














/* WORK FROM PREVIOUS ATTEMPT & NOTES FROM FIRST TECHNICAL INTERVIEW ARE COMMENTED OUT HERE:





const katzDeliLine = [];
let newNumber = 0;

// function takeANumber(katzDeli, otherDeli) {

//   katzDeli.push(otherDeli);
//   return `Welcome, `+ otherDeli + `. You are number ` + katzDe.length + ` in line.`;

// }
// i++
// i = i + 1

function takeANumber() {
  
  newNumber = newNumber + 1;
  
  katzDeliLine.push(newNumber);
  
  return `Welcome. You are number ` + newNumber;

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

//How do you use displayCustomers on line 52 to create everything from (1. " + line[0] + ", 2. " + line[1] + ", 3. " + line[2];)

//figure out what to do on line 52. do something else to displaycustomers to get it to print in this way



*/
