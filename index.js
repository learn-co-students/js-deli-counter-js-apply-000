function takeANumber(katzDeli, person){
  katzDeli.push(person)
  
  return "Welcome, " + person + ". You are number " + katzDeli.length + " in line.";
  
}

function nowServing(katzDeli){
  if (katzDeli.length === 0){  
    return "There is nobody waiting to be served!";
  }
  else {
   var message = "Currently serving " + katzDeli[0] + ".";
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