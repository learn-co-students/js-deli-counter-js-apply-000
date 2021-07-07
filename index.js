var ticketNumber = 0;

function takeANumber(current) {
  current.push(++ticketNumber);
  return `You are number ${ticketNumber}.`
}

function nowServing(current) {
  if (current.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + current.shift() + ".";
  }
}

function currentLine(current) {
  if (current.length === 0) {
    return "The line is currently empty."
  }
  let str = "The line is currently: "
  
  
  
  for (let i = 0; i < current.length; i++) {
    str += `${i + 1}. ${current[i]}`;
    if (i != current.length - 1) {
      str += ", ";
    }
  }
  
  return str;
}
