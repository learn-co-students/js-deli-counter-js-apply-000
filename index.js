  function takeANumber(katzDeliLine, name) {
    let placeInLine = katzDeliLine.length + 1;
    katzDeliLine.push(name);
     return `Welcome, ${name}. You are number ${placeInLine} in line.`;
  }

  
  
  
  
function nowServing(katzDeliLine){
          if(katzDeliLine.length === 0) {
            return 'There is nobody waiting to be served!';
          } else {
              let servingNow = katzDeliLine.shift();
            return `Currently serving ${servingNow}.`;
          }
  }
  
  
  function currentLine(line){
    if (line.length === 0) {
      return "The line is currently empty.";
    } else {
  let numberName = line.map((name, index) => `${index+1}. ${name}`);
      return `The line is currently: ${numberName.join(", ")}`;        
    } 
} 




