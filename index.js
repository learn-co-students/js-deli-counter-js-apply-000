var katzDeli = [];

function takeANumber(katzDeliLine, customer){
  katzDeliLine.push(customer) //add the customer that just came in to the back of the line. 
  var welcome= "Welcome, " + customer + ". You are number " +katzDeliLine.length + " in line."; //concat the welcome message requested
  return welcome //Will return the following message "Welcome, xName. You are number 1 in line."
}

takeANumber(katzDeliLine, customer)

function currentLine(katzDeliLine){
  var theLineIs= "The line is currently:"
  if (katzDeliLine.length>0){ //Makes sure that someone is in line. if not it will move to the else statement below
    var lineNames=[];
    for (var i=0;i<katzDeliLine.length;i++){ //Verifies that at least 1 person is waiting in line.
      var addNames=" " + (i+1) + ". " +katzDeliLine[i]; //using the for loop it concats the names with increasing number.
      lineNames.push(addNames); //pushes the items into an the lineNames var array created within the function. 
    }
    return theLineIs + lineNames //returns the theLineIs string and a list of the customer that are waiting along with their current numebr in line. 

  }
  else { //no one is waiting in line.
    return "The line is currently empty."
  }
}
currentLine(katzDeliLine)

// nowServing function provides a string of who is currently being helped
function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){ //Makes sure that at least 1 person is waiting in line. 
    var currentCustomer="Currently serving " + katzDeliLine[0] + "."; //concats who is currently being served. 
    katzDeliLine.shift(); //removes the person that was concatenated under the var=currentCustomer above.
    return currentCustomer; 
  }
  else{
    return "There is nobody waiting to be served!";
  }
}
nowServing(katzDeliLine)