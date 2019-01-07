var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(arr){
  if(arr.length){
    return `Currently serving ${arr.shift()}.`
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(arr) {
  var lineString = 'The line is currently: ';
  if(arr.length){
    for(var i = 1; i <= arr.length; i++){
        if(i === arr.length){
          lineString += `${i}. ${arr[i - 1]}`
        } else if(i < arr.length){
          lineString += `${i}. ${arr[i - 1]}, `
        }
    }
    return lineString;
  } else {
    return "The line is currently empty."
  }
}
