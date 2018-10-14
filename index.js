function takeANumber(currentLine, newPerson){
    currentLine.push(newPerson);
    let currentPosition = currentLine.indexOf(newPerson);
    return `Welcome, ${newPerson}. You are number ${currentPosition + 1} in line.`;
}

function nowServing(currentLine){
    if(currentLine.length === 0){
        return "There is nobody waiting to be served!";
    }else{
        return `Currently serving ${currentLine.shift()}.`;
    }
}


function currentLine(currentLine){
  let string = "The line is currently: ";
  if(currentLine.length === 0){
    return "The line is currently empty.";
  }else{
    currentLine.map((e, i) => {
      if(e === currentLine[currentLine.length-1]){
        string += `${i+1}. ${e}`;
      }else{
        string += `${i+1}. ${e}, `;
      }
    });
    return string;
  }

}
