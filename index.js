function takeANumber(katzDeli , name){
  katzDeli.push(name);
  var correctNumber = katzDeli.indexOf(name)+1;
  
  return "Welcome, " + name + ". You are number " + correctNumber + " in line.";
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var serve = katzDeliLine.shift();
    return "Currently serving " + serve +".";
    }else{
      return "There is nobody waiting to be served!";
    }
}

function currentLine(line){
 var first = [];
 if(line.length > 0){ 
  for (var i= 1; i <= line.length ;i++){
   first.push(" "+ i + ". " + line.shift());
    line.push("a");
  } 
  return "The line is currently:" + first;
 }
 else{ return "The line is currently empty."}
} 