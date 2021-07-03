function takeANumber(katzDeliLine, newCustomer){
  //add the newCustomer to the end of the katzDeliLine
  katzDeliLine.push(newCustomer);
  //return customer name and number in line
  return(`Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  var firstCustomer = katzDeliLine[0];
  //if there are customers remove the first customer
  if(katzDeliLine.length > 0){
    katzDeliLine.shift();
  }else{
    //the length of the array is zero
    return "There is nobody waiting to be served!";
  }
  //return the name of the first customer
  return(`Currently serving ${firstCustomer}.`);
}

function currentLine(katzDeliLine){
  var list = ''; //List of people currently in line
  if(katzDeliLine.length > 0){ //if there are people in line
    for(let i=0; i<katzDeliLine.length; i++){
      //creation of numbered list of customers
      list += `${i+1}. ${katzDeliLine[i]}${i===katzDeliLine.length-1?'':', '}`
    }
  } else {
    //the length of the line is 0 = no customers
    return "The line is currently empty."
  }
  //if there are customers return list of customers
  return(`The line is currently: ${list}`);
}
