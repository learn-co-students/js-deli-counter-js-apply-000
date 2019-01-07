var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name); //add new name to the end of the array
  var lineSpot = katzDeliLine.length; //new name is last, so it's position on line is the length of the array
  return `Welcome, ${name}. You are number ${lineSpot} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){ //if array is empty...
    return "There is nobody waiting to be served!" //return a string saying array is empty
  } else { // otherwise...
    return `Currently serving ${katzDeliLine.shift()}.` //remove first name from list and display that name
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){ //if array is empty...
    return "The line is currently empty."; //return a string saying array is empty
  } else { //if array is not empty...
    var lineMembers = `The line is currently: 1. ${katzDeliLine[0]}`; //create string with first person's name. The first name does not have a comma before it.
    for (var i = 1; i < katzDeliLine.length; i++){
      lineMembers = lineMembers + `, ${i+1}. ${katzDeliLine[i]}`; //add all remaining names to the string
    }
    return lineMembers; //return string containing all names from array
  }
}
