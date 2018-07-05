/*

var katzDeli = [];
var n = 0;
function takeANumber (newCustomer){
  katzDeli.push(n+1);
 n = n + 1;
  var message = `Welcome, You are number ${katzDeli.length} in line.`
  return message
  
}
function nowServing(nowSerCustomer) {
  var message2;
if (katzDeli.length === 0) {
   message2 = "There is nobody waiting to be served!"
} else{
 message2 = `Currently serving  ${katzDeli[0]}.`
 katzDeli.shift()
 
 
}
return message2
}

console.log(takeANumber("john"))
console.log(takeANumber("otis"))
console.log(takeANumber("Greg"))
console.log(nowServing("john"))
console.log(nowServing("otis"))
console.log(nowServing("Greg"))
console.log(nowServing("New One"))
*/


var katzDeli = []
function takeANumber (katzDeliLine,newCustomer){
  katzDeliLine.push(newCustomer);
  var message = `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
  return message
  
}
 
function  nowServing (katzDeliLine){
  var message1;
  if(katzDeliLine.length === 0){
    message1 = "There is nobody waiting to be served!"
  }else{
    message1 = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift()
  }
  return message1
}
function currentLine (katzDeliLine){
  var message2;
  var newArray1=[];
  if(katzDeliLine.length === 0){
    message2 = "The line is currently empty."
  }else{
    
    for (var i = 0; i<katzDeliLine.length; i++){
      
      newArray1[i]=`${i+1}. ${katzDeliLine[i]}`
     
    }
    message2 =  `The line is currently: ${newArray1.join(", ")}`
 
  }
return message2;  
}
