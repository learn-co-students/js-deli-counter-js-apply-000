function takeANumber(line, customer){
  line.push(customer);
  return `Welcome, ${customer}. You are number ${line.length} in line.`;
}

function nowServing(line){
  if (line.length > 0){
    return `Currently serving ${line.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  var message  = "The line is currently: "
  for (let i=0; i<line.length; i++){
    //1 is added to i because string indexes start at 0
    message = message + `${i+1}. ${line[i]}, `;
  }
  //if line has people this cuts the extra ', ' at the end of the message
  //and if it is empty it gets rid of the ': ' before empty
  message = message.slice(0,-2);
  if (line.length === 0){
    message = message + " empty."
  }

  return message;
}
