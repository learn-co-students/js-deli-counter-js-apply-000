function takeANumber(arr, str){
 var x = arr.push(str);
 arr.push(str);
 return ("Welcome, " + str + ". You are Number " + x + " in line." )
}

function nowServing(arr){

var x = arr.shift();

  if (x === undefined){
    return ("There is nobody waiting to be served!")
  }
  else{
    arr.shift();
    return (x)
  }
}

function currentLine(arr){
if (arr.length === 0){
  return ("The line is currently empty.")
}
 else{
   var line=[]
   for (i = 0; i < arr.length; i++){

     line.push(" " + [i + 1] + ". " + arr[i] )
   } return ("The line is currently: " + line)
 }
}
