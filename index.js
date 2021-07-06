function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName); //add New Customer to End of Array
  return "Welcome, " + newName +'.' + " You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var currentCustomer = katzDeliLine[0] //if nobody in line return "there is nobody waiting to be served!"
    katzDeliLine.shift()   //remove from line
  }
  return "Currently serving " + currentCustomer +"." //return first person in line
}

function currentLine(katzDeliLine){
  var lineString = "";
  var counter = 1;
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else{
    for(var i = 0; i < katzDeliLine.length; i++){
      if (counter === 1){ // no space on first customer in line
        lineString = lineString + counter + ". " + katzDeliLine[i] + ",";
      }
      else if(counter === katzDeliLine.length){ // no comma on last customer in line
        lineString = lineString + " " + counter + ". " + katzDeliLine[i];
      }
      else {
        lineString = lineString + " " + counter + ". " + katzDeliLine[i] + ",";
      }
      counter++
    }
     
  }
  return "The line is currently: " + lineString;
}