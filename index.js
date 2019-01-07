//Beginning of the day
var katzDeli = [];


function takeANumber (katzDeliLine , name) {
  
  katzDeliLine.push(name);
  
  console.log(`Welcome, ${name}. You are number ${katzDeliLine.length} in  line.`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
  
}

function nowServing(q) {
  if(q.length === 0 ) {
    
    return "There is nobody waiting to be served!"
  } else {
    //console.log("Currently serving " + line.shift());
    return "Currently serving " + q.splice(0,1) + ".";
  }
}


function currentLine(n){
  if(!n.length) {
    return "The line is currently empty.";
  }
  
  var arrayNumbers = [];
  
  
  for(var i=0; i<n.length; i++) {
    arrayNumbers.push(i+1 + ". "+ n[i]);
  }
  console.log("The line is currently: " + arrayNumbers)
  return "The line is currently: " + arrayNumbers.join(', ');
}

takeANumber(katzDeli, "Ada")
takeANumber(katzDeli, "Grace")
takeANumber(katzDeli, "Kent")
currentLine(katzDeli);
nowServing(katzDeli);
takeANumber(katzDeli, "Matz"); 
currentLine(katzDeli); 
nowServing(katzDeli);
currentLine(katzDeli); 