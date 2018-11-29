
function takeANumber(katzDeli , name){
  katzDeli.push(name)
  var correctNumber = katzDeli.indexOf(name)+1;
  
  return "Welcome, " + name + ". You are number " + correctNumber + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var serve = katzDeliLine.shift();
    return "Currently serving " + serve +".";
    }else{
      return "There is nobody waiting to be served!";
    }
}

function currentLine(katzDeliLine){
   for (var i= 0; i < katzDeliLine.length ;i++){
   var first = i+1+ ". " katzDeliLine.shift();
 katzDeliLine.push(first);
   
 }
   
 if(katzDeliLine.length > 0){ 
 var numbers = []
  return "The line is currently: " + katzDeliLine()
   }else{
     "The line is currently empty."
   }
   
}