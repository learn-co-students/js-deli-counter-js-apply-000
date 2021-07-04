function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine === undefined || katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    var firstPerson = katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  }
}

function currentLine(line){
  if (line === undefined || line.length === 0){
    return "The line is currently empty.";
  }else{
    var tempString = "The line is currently:";
    for(let i = 0; i < line.length; i++){
      if(i === line.length-1){
        tempString += ` ${i+1}. ${line[i]}`;
      }else{
        tempString += ` ${i+1}. ${line[i]},`;
      }
    }
    return tempString;
  }
}

//var katzDeliLine = [];
 
//console.log(takeANumber(katzDeliLine, "Ada"));
//console.log(takeANumber(katzDeliLine, "Grace"));