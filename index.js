// initialize line array
var katzDeli = [];

//give customer a number
function takeANumber(katzDeliLine,name) {
  var position = katzDeliLine.length+1;
  //add new customer to array
  katzDeliLine.push(name);
  //Great customer and give number
  return `Welcome, ${name}. You are number ${position} in line.`
}

//Announce first in line
function nowServing(katzDeliLine) {
  //check if line is empty
  if(katzDeliLine.length===0) {
    return "There is nobody waiting to be served!"
  } else { //if line is not empty
    //get first in line
    var first = katzDeliLine[0];
    //remove first from line
    katzDeliLine.shift();
    //announce currently serving
    return `Currently serving ${first}.`;
  }
}

//get current line
function currentLine(katzDeliLine) {
  //check if line is empty
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else { //if line is not empty
    var stringList = "The line is currently: "
    //loop through each person in line
    for(var i=0;i<katzDeliLine.length;i++) {
      //get number in line from index
      var num = i+1;
      //get name from array
      var name = katzDeliLine[i];
      //if not the last person in line, include comma
      if(i != (katzDeliLine.length-1)) {
        stringList += `${num}. ${name}, `
      }
      else { //if last in line, no comma
        stringList += `${num}. ${name}`
      }
    }
    return stringList;
  }
}
