function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name); 
  for (var i=0; i < katzDeliLine.length; i++){    
    var string = 'Welcome, ' + katzDeliLine[i] + '. You are number ' + (i + 1) + ' in line.';
  }
      return string;
}


function nowServing(katzDeliLine){
 if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
 }
 else {
   return 'Currently serving ' + katzDeliLine.shift() + '.';
 }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else {
    var i = 0;
    var new_line = [];
    while (katzDeliLine[i]){
       new_line.push(" " + (i+1) + ". " + katzDeliLine[i]);
    i++;
    }
  }
  return "The line is currently:" + new_line;
}