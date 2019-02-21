function takeANumber (katzline, customer){
  katzline.push(customer)
  return ("Welcome, " + customer + ". You are number " + katzline.length + " in line." );
}
function nowServing(katzline){
  if (katzline.length > 0) {
    return ("Currently serving " + katzline.shift() + ".")
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine (katzline) {
  if (katzline.length > 0){
    var message = "The line is currently: "
    var i
    for (i = 0; i < katzline.length; i++){
       message += (i+1) + ". " + katzline[i]
       if (i < (katzline.length - 1)){ // add comma if there are more names in the array
         message += ", "

       }

     }
  }
  else {
    message = "The line is currently empty."
  }
  return message;
}
