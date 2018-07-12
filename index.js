var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var linePosition = katzDeliLine.indexOf(name) + 1;
  return 'Welcome, ' + name + '. ' + 'You are number ' + linePosition + ' in line.'
}

function nowServing(katzDeliLine){
  var firstCustomer = katzDeliLine.shift();
  
  if (katzDeliLine.length > 0){
    return 'Currently serving ' + firstCustomer + '.';
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine){
  var newString = 'The line is currently: '; 
  
  if (katzDeliLine.length === 0){
   return "The line is currently empty."
  } else {
    var i = 0; 
    while (i < katzDeliLine.length){
        var position = i + 1; 
        var name = katzDeliLine[i];
        newString += position +'. ' + name;
        if (i !== katzDeliLine.length - 1){
          newString += ', '
        }
     i++;  
    }
  }
  return newString; 
}
  
