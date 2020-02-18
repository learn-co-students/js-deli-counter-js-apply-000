//function accepts a customer name (second argument) and adds it to an array of customers (first argument)
//a welcome message is returned along with a customer's position in the line.
function takeANumber(katzDeliLine, customerName){
  katzDeliLine.push(customerName);
  let linePosition = katzDeliLine.length;
  let welcomeMessage = "Welcome, " + customerName + ". You are number "+ linePosition + " in line.";
  return welcomeMessage;
}

//function accepts the list of customers in the line as an array.
//returns the first person in line and removes it from the array
function nowServing(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "There is nobody waiting to be served!";
  }
  let servingPerson = katzDeliLine.shift();
  return "Currently serving " + servingPerson + ".";
}

//function accepts an array of names and returns the content in a form of comma separated list
function currentLine(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "The line is currently empty.";
  }
  let customersArray = [];
  for(let i =0; i<katzDeliLine.length; i++){
    let customer = (i+1).toString() + ". " + katzDeliLine[i];
    customersArray.push(customer);
  }
  return "The line is currently: " + customersArray.join(', ');
}
