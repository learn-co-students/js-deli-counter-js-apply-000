var katzDeliLine = [] ;

function takeANumber(katzDeliLine, name) {
  
  //we want to create a variable that is equal to the length of the array and add one to this since we start counting at 0 and want to give the customer their position in a way they understand it
  
  var currentNumber = katzDeliLine.length + 1;
  
  //we want to push on the name that was input onto the katzDeliLine array so we can have a full list and keep track of everyone entering the deli
  
  katzDeliLine.push(name);
  
  //we want to return a personalized welcome greeting with their name and current position in line
  return "Welcome, " + name + '. You are number ' + currentNumber + ' in line.';
}

function nowServing(katzDeliLine) {
  
  //first deal with the edge case. We know that katzDeliLine is an array, therefore it accepts the .length property. We therefore know that if the length of the array is equal to 0, it must be empty, and we can return the appropriate message for this circumstance
  
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } 
  //at this point we can assume there is some data in the array. First we will create a variable set to the katzDeliLine at its first customer, or index 0
  
    var firstPersonInLine = katzDeliLine[0]; 
    
    //now that the variable is set, we can remove the first person in line from the katzDeliLine array using the .shift() method
    
    katzDeliLine.shift();
    
    // now we can return the appropriate message, including the name of the first person in line
    
    return 'Currently serving ' + firstPersonInLine + '.';
}

function currentLine(katzDeliLine) {
  
  //first deal with the edge case. //first deal with the edge case. We know that katzDeliLine is an array, therefore it accepts the .length property. We therefore know that if the length of the array is equal to 0, it must be empty, and we can return the appropriate message for this circumstance
  
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.'
  }
  
  //next we will create an empty array to push on our values to;
  
  var array = [];
  
  
  for(var i = 0; i < katzDeliLine.length; i++){
    var currentPosition = i + 1;
    var currentPerson = katzDeliLine[i]
    var positionAndPerson = currentPosition + '. ' + currentPerson;
    array.push(positionAndPerson) 
  }
    array = array.join(", ")
    return 'The line is currently: ' + array;
}