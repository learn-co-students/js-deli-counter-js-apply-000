function takeANumber(katzDeliLine, newPerson){
  var num = katzDeliLine.length;
  num++;
	if (katzDeliLine.length === 0){
    console.log('the line is empty');
  }	
   
   katzDeliLine.push(newPerson);

   return "Welcome, " + newPerson + "." + " " + "You are number " + num.toString() + " " + "in line" + ".";


  




}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  
  return "Currently serving " + katzDeliLine.shift() + ".";
}


function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  
var arr = [];
var coun = 1;
while(coun < katzDeliLine.length){
  for(var i = 0; i < katzDeliLine.length;i++){
  arr.push(` `+coun + "." + " " + katzDeliLine[i]);
  coun++;
}
  
} 
  return "The line is currently:"+ arr.toString();
  
}
