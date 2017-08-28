var katzDeliLine = ["Ada", "Grace", "Kent",];


function takeANumber(katzDeliLine,name){
  return `Welcome, ${name}. You are number ${katzDeliLine.push(name)} in line.`;
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length<1){
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}
function currentLine(katzDeliLine){
  if(katzDeliLine.length<1){
    return "The line is currently empty.";
  } else {
    var counter=0;
    var line=[]
    while (counter<katzDeliLine.length){
      line.push(`${counter+1}. ${katzDeliLine[counter]}`);
      counter++;
    }
    return `The line is currently: ${line.join(", ")}`;
  }
}
