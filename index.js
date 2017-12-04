const katzDeli = [];

function takeANumber(katzDeliLine, personName){
   katzDeliLine.push(personName);
   return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing(katzDeliLine){
   if (katzDeliLine.length === 0){
      return 'There is nobody waiting to be served!';
   }else{
      let currentlyServing = katzDeliLine.shift();
      return `Currently serving ${currentlyServing}.`;
   }
}

function currentLine(katzDeliLine){
   let peopleInLine = "The line is currently: "
   if (katzDeliLine.length === 0){
      return "The line is currently empty."
   } else {
      for (let i = 0; i<katzDeliLine.length; i++){
         if (i < katzDeliLine.length-1){
            peopleInLine += `${i+1}. ${katzDeliLine[i]}, `
         }else{
            peopleInLine += `${i+1}. ${katzDeliLine[i]}`
         }
      }
   }
   return peopleInLine;
}
