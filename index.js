function takeANumber(currentLineOfPeople, newPersonName){
  if (currentLineOfPeople.length === 0){
    currentLineOfPeople.push(newPersonName);
    return `Welcome, ${newPersonName}. You are number ${currentLineOfPeople.length} in line.`;
  }
  else{
    currentLineOfPeople.push(newPersonName)
    return `Welcome, ${newPersonName}. You are number ${currentLineOfPeople.length} in line.`;
  }
}

function nowServing(currentLineOfPeople){
  if (currentLineOfPeople.length === 0){
    return 'There is nobody waiting to be served!';
  }else{
    return `Currently serving ${currentLineOfPeople.shift()}.`;
  }
}

function currentLine(currentLineOfPeople){
  if (currentLineOfPeople.length === 0){
    return "The line is currently empty.";
  }
  else{
    let string ='The line is currently: ';
    for ( let i = 0; i < currentLineOfPeople.length; i++){
      string += `${i+1}. ${currentLineOfPeople[i]}, `;
    }
    string = string.slice(0,-2);
    return string;
  }
}