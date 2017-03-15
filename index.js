var katzDeliLine = [];

function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person);
  return "Welcome, " + person + ". You are number " + (katzDeliLine.indexOf(person)+1) + " in line."
} // "Welcome, Ada. You are number 1 in line."


function nowServing(arr) {
  // var output = "";
  if(arr.length > 0){
    return "Currently serving " + arr.shift() + ".";
    //arr.shift();
  }
  if(arr.length === 0){
     return "There is nobody waiting to be served!";

  }

}


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
