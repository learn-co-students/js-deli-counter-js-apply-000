var katzDeliLine = [];

function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person);
  return "Welcome, " + person + ". You are number " + (katzDeliLine.indexOf(person)+1) + " in line."
} // "Welcome, Ada. You are number 1 in line."


function currentLine(arr) {
  var line = "The line is currently: "
  if(arr.length === 0){
    return "The line is currently empty.";
  }else {
    for(var i=0; i<arr.length; i++){
      line += (i + 1) + ". " + arr[i] + ", ";
    }
    return line.slice(0, line.length-2);
  }
}

function nowServing(arr) {
  if(arr.length > 0){
    var serving = arr.shift();
    return "Currently serving " + serving + ".";
  }
  if(arr.length === 0){
     return "There is nobody waiting to be served!";
  }
}

var count = 0;
function getANumber(arr){
  if(arr.length > 0){
    count = arr[arr.length-1] +1 ;
  }
  else{
    count ++;
  }
  arr.push(count);
  return arr[arr.length-1];
}
