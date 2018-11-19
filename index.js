function takeANumber(currentLine,costumersName){
  currentLine.push(costumersName);
  return `Welcome, ${costumersName}. You are number ${currentLine.length} in line.`;
}

function nowServing(maxDeli){
  if(maxDeli.length > 0){
    let serving = `Currently serving ${maxDeli[0]}.`
    maxDeli.shift();
    return serving;
  }else{
    return 'There is nobody waiting to be served!';
  }
}

 function currentLine(maxDeli){
  if(maxDeli.length > 0){
    let index = 0;
    let currentCostumers = [];
   while(index < maxDeli.length){
      currentCostumers.push(` ${index + 1}. ${maxDeli[index]}`);
     index++;
    }
    return `The line is currently:${currentCostumers}`;
  }else{
    return 'The line is currently empty.';
  }
}


