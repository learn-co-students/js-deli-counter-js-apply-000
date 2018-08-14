var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
}
takeANumber(katzDeli, "Ada")
takeANumber(katzDeli, "Grace")
takeANumber(katzDeli, "Kent")

var deliLine = ["Steven", "Blake", "Avi"]
function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + deliLine.shift() +".";
  }
}
var line = ["Bill", "Jane", "Ann"]
function currentLine(line){
  if(line.length === 0) {
    return "The line is currently empty.";
  }
  var string = [];

  for(var i=0; i<line.length; i++) {
    string.push(i+1 + ". "+ line[i]);
  }
  return "The line is currently: " + string.join(', ');
}
