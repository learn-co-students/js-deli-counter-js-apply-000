function takeANumber(katzDeli, name) {
  katzDeli.push(name);
    return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}



function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";

  }else
    return `Currently serving ${katzDeliLine.shift(katzDeliLine[0])}.`;

 }

function currentLine(katzDeliLine){
  var results =[];

  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }

  for (var i = 0; i< katzDeliLine.length;i++){
     results.push(` ${i+1}. ${katzDeliLine[i]}`);
 }
     return "The line is currently:" + results;
}
