
function takeANumber(lineOfPeople, newName){
  lineOfPeople.push(newName);
  var numberInLine = lineOfPeople.length;
  var msg = `Welcome, ${newName}. You are number ${numberInLine} in line.`
  
  return msg;
}

function nowServing(lineOfPeople){
  if (lineOfPeople.length > 0){
    var currentCustomer = lineOfPeople.shift();
    return `Currently serving ${currentCustomer}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(lineOfPeople){
  var text, i;
  
  if (lineOfPeople.length > 0){
    text = "The line is currently: "
    
    for(i = 0; i < lineOfPeople.length; i++){
      if (lineOfPeople.length - i === 1){
        text += `${i+1}. ${lineOfPeople[i]}`;
      } else {
        text += `${i+1}. ${lineOfPeople[i]}, `;
      }
    }
  } else {
    text = "The line is currently empty."
  }
  
  return text
}