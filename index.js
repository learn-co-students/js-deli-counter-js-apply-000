var katzDeli = [];

function takeANumber (katzDeliLine, name){

katzDeliLine.push(name)

return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

takeANumber(katzDeli, 'Ada');
takeANumber(katzDeli, 'Grace');
takeANumber(katzDeli, 'Kent');

var deliLine = [
  "Steven",
  "Blake",
  "Avi"]

function nowServing (katzDeliLine){
 katzDeliLine.shift([0])
  if (katzDeliLine.length === 0){
  return "There is nobody waiting to be served!";
}else{
  return "Currently serving " + deliLine[0] + "."
}
 }
 nowServing([]);



function currentLine(katzDeliLine){
  var string = "1. " + katzDeliLine[0]
  for (var i=1; i<katzDeliLine.length; i++){
    string += ', '+ [i+1] + '. ' + katzDeliLine[i]
  }
     if (katzDeliLine.length === 0){
      return "The line is currently empty."
    }else{
      return "The line is currently: " + string
    }
}
 currentLine(["Bill"," Jane"," Ann"])
