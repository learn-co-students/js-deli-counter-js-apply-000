function takeANumber(katzDeli, person){
  // add member to array
  katzDeli.push(person)
  //print string stating which number they are in line
  return "Welcome, " + person + ". You are number " + katzDeli.length + " in line.";
  
}

function nowServing(katzDeli){
  //count array members to determine if there are no members
  if (katzDeli.length === 0){  
    return "There is nobody waiting to be served!";
  }
  //show served member
  else {
   var message = "Currently serving " + katzDeli[0] + ".";
   //remove served member from array
   katzDeli.shift()
   return message
  }
  
}
function currentLine(katzDeli){
  if (katzDeli.length === 0){
    return "The line is currently empty."
  }
  else {
    var str = "The line is currently: "
   for (var i = 0; i < katzDeli.length; i++){
   if (i < katzDeli.length - 1){
        str += `${i+1}. ${katzDeli[i]}, `  ;
   }
   else {
        str += `${i+1}. ${katzDeli[i]}`  ;
   }
  }
  return str
  }
}