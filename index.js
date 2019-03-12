//Empty Array
var katzDeliLine = [];

function takeANumber(currentLine, name){
  //Adds name to the array
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(katzDeliLine){
  //Checks if the length of array is equal to 0
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    //returns first value in array while removing
    //it out of the array at the same time
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  //Checks if the length of array is equal to 0
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else{
    //create variable to hold the main string
    let currentPeople = 'The line is currently: ';

    //loop through array parameter
    for(let i = 0; i < katzDeliLine.length; i++){
      //if i is on the last value of the array
      if(i === katzDeliLine.length - 1)
      {
        //concatenate the last number and name to the string
        //without the comma and break from this the for loop
        currentPeople += `${i+1}. ${katzDeliLine[i]}`;
        break;
      }
      //concatenate number and name to the string
      //adding 1 so that way it won't start on 0
      currentPeople += `${i+1}. ${katzDeliLine[i]}, `;
    }return currentPeople;
  }
}
