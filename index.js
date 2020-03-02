let katzDeliLine = [];


function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
   return `There is nobody waiting to be served!`;
} else {
  return `Currently serving ${katzDeliLine.shift()}.`;
    }
}


function currentLine(katzDeliLine){
let results = '';
  if(katzDeliLine.length === 0){
      return `The line is currently empty.`;
    } else {
      for(let i = 0; i <katzDeliLine.length; i++){
      results += `${[i+1]}. ${katzDeliLine[i]}, `;
          //console.log(`The line is currently: ${[i+1]} ${katzDeliLine[i]}`);
            }
            return `The line is currently: ${results}`;
    }
  }
