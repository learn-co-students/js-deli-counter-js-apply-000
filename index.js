var katzDeliLine = [];

// katzDeliLine is the list of all the people.  will need to count

// var numberInLine = (katzDeli.length + 1)


// takeANumber will add the new person to the end of katzDeliLine array
// it will also count the length of the katzDeliLine array in order to return their place in line
function takeANumber(katzDeliLine, newPerson) {
  var numberInLine = (katzDeliLine.length)
  katzDeliLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + (numberInLine + 1) + " in line."
}

// nowServing will first check if katzDeliLine is empty, if true will return the string.
// If not it will return the string using .shift which will return and subsequently remove the first person in katzDeliLine
function nowServing(katzDeliLine) {
  var numberInLine = katzDeliLine.length
  if (numberInLine === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}





// currentLine will tell the person where they are inline.
// It should create an object key value pair for each person and place in line
// the console.log is just to see what is is doing
// **the idea was to avoid limiting the formatted string.  reguardless of what is in katzdeli line it would record and associate
// **I think there are two issues 1) its nots pushing key value pairs, 2) im not calling the key value pairs in the return
// its fixed now using template literals and interpolating the string
// simply adding a space to the front of currentLine.push(i+1 + ". " + katzDeliLine[i]) didnt work and returned wrong place in line

function currentLine(katzDeliLine) {
  var numberInLine = katzDeliLine.length
  var currentLine = []
  if (numberInLine === 0) {
    return "The line is currently empty."
      }
  for (var i = 0; i < numberInLine; i++) {
      currentLine.push(` ${i+1}. ${katzDeliLine[i]}`)
    console.log(currentLine)
      }
  return "The line is currently:" + currentLine
}



// failed attempts


/*

// currentLine will tell the person where they are inline. It should create an object key value pair for each person and place in line


function currentLine(katzDeliLine) {
  var numberInLine = katzDeliLine.length
  var currentLine = []
}


//  var namePlace = i+1 + ". " + katzDeliLine[i]
//  currentLine.push(i+1)
//  currentLine.push(katzDeliLine[i]);
  //  currentLine.push(i+1 + ". " + katzDeliLine[i])
  //  console.log(namePlace)

  */
  /*
  if (numberInLine === 0) {
    return "The line is currently empty."
  }
  else {

  }
}


*/


/*
function nowServing(katzDeliLine) {
  var numberInLine = katzDeliLine.length
  var upNext = []
  while (numberInLine > 0) {
    upNext.push()
    return "Currently serving " + katzDeliLine[0] +"."
    }
  if (numberInLine === 0) {
    return "There is nobody waiting to be served!";
  }

}

*/

// katzDeliLine.shift();
