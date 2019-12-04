var katzDeliLine = []

// Current Customer Queue
function currentLine(katzDeliLine) {
  var roster = []

  
    
  if (katzDeliLine.length > 0) {
  for (let i =0; i < katzDeliLine.length;i++)
    roster.push(" "+(i + 1)+". "+ `${katzDeliLine[i]}`)
     return "The line is currently:" +roster} 
  else {return "The line is currently empty." }
}

//New Customer
function takeANumber(katzDeliLine, name) {
  
  var newCustomerPosition = katzDeliLine.push(name);
  
  var takenumberwelcomemessage = "Welcome, " + name + ". You are number " + newCustomerPosition + " in line.";
  
  return(takenumberwelcomemessage)
  
}

// Current Customer
function nowServing(katzDeliLine) {
  
  
  var Currentcustomer = (katzDeliLine[0]);
  
  if (katzDeliLine.length>0) 
   {return "Currently serving " +katzDeliLine.shift()+ "."} 
  else {return "There is nobody waiting to be served!"}
}

