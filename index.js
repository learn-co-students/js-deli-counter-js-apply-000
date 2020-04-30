function takeANumber(array1,name){
    array1.push(name)
    return "Welcome, " + name + ". You are number " + array1.length + " in line."; 
}

function nowServing(array1){
  if(array1.length === 0){
    return "There is nobody waiting to be served!";
  }
  var first = array1[0];
    array1.shift()
    return "Currently serving " + first + "."
}
var line =[];
function currentLine(array1){
  if(array1.length === 0){
    return "The line is currently empty."
  }
  for(var i=0;i <array1.length;i++){
  line.push(" "+(i+1) +". "+array1[i])
  }
  return "The line is currently:" + line;
}