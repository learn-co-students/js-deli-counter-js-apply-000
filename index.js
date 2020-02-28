function takeANumber(arr, str){

 arr.push(str);
 var x = arr.indexOf(str) + 1
 return ("Welcome, " + str + ". You are number " + x + " in line." )
}

function nowServing(arr){

var x = arr[0];

  if (x === undefined){
    return ("There is nobody waiting to be served!")
  }
  else{
    arr.shift();
    return ("Currently serving" + " " + x + ".")
  }
}

function currentLine(arr){
if (arr.length === 0){
  return ("The line is currently empty.")
}
 else{
   var line=[]
   var i=0
   for (i = 0; i < arr.length; i++){

     line.push( [i + 1] + ". " + arr[i] )
   } return ("The line is currently: " + line.join( ', '))
 }
}
