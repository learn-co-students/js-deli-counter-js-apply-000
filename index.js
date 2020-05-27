
function takeANumber(katzDeliLine, newPerson){
    katzDeliLine.push(newPerson);
        return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}
 function nowServing(katzDeliLine){
    if(katzDeliLine.length !== 0){
    return `Currently serving ${katzDeliLine.shift([0])}.`;
    } else {
    return "There is nobody waiting to be served!";
    }
}


function currentLine(arr) {
  if(arr.length === 0){
    return "The line is currently empty."
  } else {
  let line = "The line is currently: ";
  for(let i = 0; i < arr.length; i++){
    if(i === 0){
      line = line += `${i+1}. ${arr[i]}`;
    } else {
      line = line += `, ${i+1}. ${arr[i]}`
    }
  } return line;
  }
  
}