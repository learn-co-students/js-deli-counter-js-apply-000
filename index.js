var katzDeliLine = [];

function takeANumber (katzDeliLine, name){
  var position = katzDeliLine.length+1
  katzDeliLine.push(name)
return "Welcome, " + name +". You are number "+ position +" in line."

}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!" ;
  }else{
    return "Currently serving "+`${katzDeliLine.shift()}`+"."
    
  }
}

function currentLine(line){
 let x = "The line is currently: ";
  if (line.length === 0){
    return "The line is currently empty."; 
  }else{
    for(let i = 0;i<line.length - 1;i++){
      x += (i+1) + ". " + `${line[i]}`+", ";
    }
   x+= (line.length)+ ". " + `${line[line.length - 1]}`
   return x;
  }
  
}