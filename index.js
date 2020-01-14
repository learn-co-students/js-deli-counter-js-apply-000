function takeANumber(number, name){
  number.push(name);
  return (`Welcome, ${name}. You are number ${number.length} in line.`);
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length){
    let firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  }else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  let result = "The line is currently:";
  if(!katzDeliLine.length){
    result = result.substring(0, result.length-1);
    return result+= " empty.";
  }
  for(let i in katzDeliLine){
    result += ` ${Number(i)+1}. ${katzDeliLine[i]},`
  }
  return result.substring(0, result.length - 1);
}
