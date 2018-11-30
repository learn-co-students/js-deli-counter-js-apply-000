function takeANumber (currentLine, newCustomer) {
  currentLine.push(newCustomer)
return ("Welcome, " + newCustomer + "." + " You are number " + (currentLine.length) + " in line." )
}
function nowServing (katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return ("There is nobody waiting to be served!");
  } else { 
    var x = "Currently serving " + katzDeliLine[0] + "."
  katzDeliLine.shift ();
  return (x);
  }
}
function currentLine (customerArray) {
  var emptyArray =[];
  if (customerArray.length >=1) {
      for (let i=0; i < customerArray.length; i++) {
      emptyArray.push( (i+1)+". " + customerArray[i]); 
      }
        return "The line is currently: " + emptyArray.join(", ");
      } else {
    emptyArray.push("The line is currently empty.");
      }
    return emptyArray
}