function takeANumber(katzDeliLine, newName){
  var deliArray = katzDeliLine;
  deliArray.push(newName); 
  return `Welcome, ${newName}. You are number ${deliArray.length} in line.`;
}

function nowServing(katzDeliLine){
  var deliArray = katzDeliLine;
  if (deliArray.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var splitArr = deliArray.shift();
    return `Currently serving ${splitArr}.`;
  }
}

function currentLine(katzDeliLine){
  var deliArray = katzDeliLine;
  var lineLength = deliArray.length;
  var emptyString = ""
  if (lineLength === 0){
    return "The line is currently empty."
  } else {
    for (let i = 0; i < lineLength; i++){
      if (i+1 === lineLength){
        emptyString = emptyString.concat(`${i+1}. ${deliArray[i]}`);
      }
      else{
        emptyString = emptyString.concat(`${i+1}. ${deliArray[i]}, `);
      }
    }
    return `The line is currently: ${emptyString}`;
  }
}