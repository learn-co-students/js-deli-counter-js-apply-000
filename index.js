function takeANumber(currentLine, customerName) {
  currentLine.push(customerName);
  var placeInLine = 0;
  for(var i=0;i<currentLine.length;i++) {
    if(customerName === currentLine[i]) {
      placeInLine = i+1;
    }
  }
  return 'Welcome, ' + customerName + '. You are number ' + placeInLine + ' in line.';
}

function nowServing(katzDeliLine) {
  var answer = '';
  if(katzDeliLine.length === 0) {
    answer = 'There is nobody waiting to be served!';
  }
  else if(katzDeliLine.length > 0) {
    answer = 'Currently serving ' + katzDeliLine.shift() + '.'; 
  }
  return answer;
}

function currentLine(katzDeliLine) {
  var answer = '';
  var lineInString = [];

//if the line is empty
  if(katzDeliLine.length === 0) {
    answer = 'The line is currently empty.'
  }
  else if (katzDeliLine.length > 0) {
//for loop to convert array into string
    for(var i=0;i<katzDeliLine.length;i++) {
     lineInString.push((i+1) + '. ' + katzDeliLine[i]);
    }
  answer = 'The line is currently: ' + lineInString.join(', ');
  }
  return answer;
}