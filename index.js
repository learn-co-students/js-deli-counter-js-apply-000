var katzDeliLine=[];

function takeANumber(katzDeliLine,customer){
  
katzDeliLine.push(customer) 


return "Welcome, " + customer + ". You are number " + katzDeliLine.length +" in line."
}

function nowServing(array){
  
if (array.length > 0){
  
var whosup = array.shift(array[0]);


return "Currently serving " + whosup + "."

}

else {return "There is nobody waiting to be served!"}

} 



function currentLine(array){

var result = " "

if (array.length>0){

for(var i = 0; i < array.length ; i++){

result+= (array.indexOf(array[i])+1)+ ". " + array[i] + ","

  if(array.indexOf(array[i]) === array.length-1) {return array[i]}
  
  else {return "The line is currently:" + result}

} }

else {return "The line is currently empty."}

}