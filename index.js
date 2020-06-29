var katzDeliLine = [] ;

function takeANumber(katzDeliLine, name) {
  var currentNumber = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return "Welcome, " + name + '. You are number ' + currentNumber + ' in line.';
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } 
    var currentCustomer = katzDeliLine[0]; 
    katzDeliLine.shift();
    return 'Currently serving ' + currentCustomer + '.';
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.'
  }
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