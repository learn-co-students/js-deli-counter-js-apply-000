var number = 0 
function takeANumber(katzDeli){
  number = number + 1
  // add member to end of array
  katzDeli.push(number)
  //state which number member is in array
  return "You are number " + number + " in line.";
  
}

function nowServing(katzDeli){
  //determine if there are any array members
  if (katzDeli.length === 0){  
    return "There is nobody waiting to be served!";
  }
  //show first array member
  else {
   var message = "Currently serving " + katzDeli[0] + ".";
   //remove member from array
   katzDeli.shift()
   return message
  }
  
}
function currentLine(katzDeli){
  //check for unserved members in array
  if (katzDeli.length === 0){
    return "The line is currently empty."
  }
  //get unserved array members
  else {
    var str = "The line is currently: "
    //concatenates the order of unserved array members
   for (var i = 0; i < katzDeli.length; i++){
   if (i < katzDeli.length - 1){
        str += `${i+1}. ${katzDeli[i]}, `  ;
   }
   //concatenates the last unserved array member
   else {
        str += `${i+1}. ${katzDeli[i]}`  ;
   }
  }
  return str
  }
}