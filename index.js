var katzDeli = [];
var deliLine = [];

function takeANumber (katzDeliLine, name) {
  katzDeli.push(name);
  var deliLine = katzDeli.length; 
  console.log("deli line: " + katzDeli)
  return "Welcome, " + name + ". You are number " + (deliLine + katzDeliLine) + " in line."
}