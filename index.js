function takeANumber(num, name){
   num.push(name);
    return "Welcome, " + name + ". You are number " + `${num.indexOf(name) + 1}` +  " in line.";
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0 ){
    return "There is nobody waiting to be served!"
  }
  else{
    var next = "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.shift()
    return next
  }
}

function currentLine(listOfLine){
  var line = [];
  if(listOfLine.length === 0){
    return "The line is currently empty."
  }
  else{
   for(var i = 0; i < listOfLine.length; i++){
    line.push(`${i + 1}` + ". " + listOfLine[i]);
    line[i] = " " + line[i]
    } 
    return "The line is currently:" + line
  }
}