var katzDeli = [];

function takeANumber(katzDeliLine, name){
  var pos = katzDeliLine.length+1
  katzDeliLine.push(name)
return `Welcome, ${name}. You are number ${pos} in line.`;

}

function nowServing(katzDeliLine){
if (katzDeliLine.length > 0){
  var temp =  katzDeliLine[0];
    katzDeliLine.shift();
  return `Currently serving ${temp}.`;

} else{
  return "There is nobody waiting to be served!"
}

}

function currentLine(katzDeliLine){
  var newThing = 'The line is currently: '
if (katzDeliLine.length < 1){
  return "The line is currently empty."
} else{

  for (var i=1; i<katzDeliLine.length+1; i++){

     newThing += `${([i])}. ${katzDeliLine[i-1]}`
     if (i < katzDeliLine.length){
       newThing += ', '
     }

  }
  return newThing;

}


}
