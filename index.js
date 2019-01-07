// Build a function that a new customer will use when entering the deli. The function, takeANumber, should accept the current line of people, katzDeliLine, along with the new person's name as parameters. The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

// Build a function nowServing. This function should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

// Build a function currentLine that returns the current line. For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace". If there is nobody in line, it should return "The line is currently empty."

var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];
var deliLine; 
var inLine;
var msg ="";

// function to take a number - 
// pass arugments: current line of people, name of new customer
// log position in line using index + 1 position
function takeANumber (lineStatus, newCustomer) {
  //assign parameter lineStatus to variable for global scope
  deliLine = lineStatus;  

  // add new customer to array
  // deliLine.push(newCustomer);

  // loop through each element in the array
  for (var i = 0; i < deliLine.length; i++) {
  // var cust = deliLine[i];
  var num = i + 1;
  // console.log(num + " " + cust);
  }
  // log the new customer's position in line, where i is position
  // console.log(deliLine);
  console.log("Welcome, " + ". You are number " + num + ".");
}

// call the function and pass arguments
takeANumber(katzDeli, "Ada");
// console.log(deliLine);

// takeANumber(otherDeli, "Alby");

// add deliLine to katzDeli array
// will take in Ada if first function called
// Array.prototype.push.apply(katzDeli,deliLine);
// console.log(deliLine);

// takeANumber(katzDeli, 'Ada');
// console.log(deliLine);

// takeANumber(katzDeli, 'Grace');

// takeANumber(katzDeli, 'Kent');
// console.log(deliLine);

// function nowServing
function nowServing (lineStatus) {
  // console.log(deliLine);
  // if less than 1 in line do this
  if (lineStatus.length < 1) {
      inLine = false;
      console.log("There is nobody waiting to be served!");
      // console.log(deliLine);
    // if more than 1 in line do this    
    } else {
      inLine = true;
      // log who is being served
      console.log("Currently serving " + lineStatus[0] + ".");
      // remove name being served using first index position and remove one element
      lineStatus.splice(0, 1);
      //console.log(lineStatus);
      if (lineStatus.length < 1) { 
      inLine = false;
    }
    }
}

nowServing(deliLine);
//console.log(inLine);

//function current in line
//returns the current line using index position + name
//if not, return line is empty
function currentLine (line) {
    if (inLine === true) {
    for (var i = 0; i < deliLine.length; i++) {
    msg += i+1 + ". " + deliLine[i] + " ";
      }    
      console.log("The line is currently: " + msg);
    } else if (inLine === false) {  
    msg = "The line is currently empty.";  
    console.log(msg);   
    }
  }

currentLine(deliLine);