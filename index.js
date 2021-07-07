function takeANumber(current, customer){
  current.push(customer);
  return "Welcome, " + customer + "."+" You are number " + (current.length) + " in line.";
}


function nowServing(currentLine){
  if(currentLine.length !== 0){
    var person = currentLine.shift();
    return "Currently serving "+ person +"."; 
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (array){
   var empty = [];
  if(array.length === 0){
    return "The line is currently empty.";
} else {
    for (var i = 0; i<array.length; i++){
   empty.push(" "+ (i+1) +". " + array[i]);
}
return "The line is currently:" + empty;
}
}