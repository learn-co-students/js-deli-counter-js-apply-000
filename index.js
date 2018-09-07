var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name);
//var welcomeMessage = "Welcome, " + name + ". you are number " + katzDeliLine.length + " in line."
return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
//return  welcomeMessage;
}
//takeANumber("welcome, Ada. you are number 1 in line.")

function nowServing(katzDeliLine) {
 var name = katzDeliLine.shift()''
return "Serving food to " + name +  "."

if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
     }
  }


  function currentLine(katzDeliLine) {
// for (var i = 0; i < katzDeliLine.length; i++) {
//
//   return "The line is currently " +  katzDeliLine

  if (katzDeliLine.length === 0) {
    return "The line is currently empty"
  } else {
      for (var i = 0; i < katzDeliLine.length; i++) {

      return "The line is currently " +  katzDeliLine
  }
}
}     
