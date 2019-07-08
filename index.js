const katzDeli = []; //Empty string where we insert the names of customers in line
var name; //Variable where we insert parameters
function takeANumber(katzDeli, name){
  katzDeli.push(name); // Add the value of the "name" parameter into the empty string
  var numberInLine = katzDeli.length; //Count the number of customer names in the array, which equals the number of customers in line
  var message = `Welcome, ${name}. You are number ${numberInLine} in line.`;
  return message
}

function nowServing (katzDeli) {
  if (katzDeli.length === 0) { //if katzDeli is empty, return the following message
    var message = "There is nobody waiting to be served!"
    return message
  }
  else { //Otherwise, check the first person in line, remove that person from the line and return the message below
    var message = `Currently serving ${katzDeli[0]}.`
    katzDeli.shift(); // Removes the zeroth index item from the deli line array
    return message
  }

  // return katzDeli[0]
  // // if (numberInLine > 0) {
  // if (katzDeli && katzDeli.length){
  //     katzDeli.shift();
  // }
  // else {
  //   return "There is nobody waiting to be served!"
  // }
  }

const line = []; //Array to store customer names
function currentLine (line) {
  if (line.length === 0) { //if there are no entries in the line array, return this message
    var message = "The line is currently empty."
    return message
  }
  else { //otherwise, return a message with the list of names from the line array
    var message = `The line is currently: `
    for (var i = 0; i < line.length; i++) {
      message+= `${i +1}. ${line[i]}, `
    }
    return message.slice(0, message.length -2)
  }
}
