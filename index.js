function takeANumber(current_line, new_person) {
  let line_number = current_line.length + 1;
  current_line.push(new_person);
  return `Welcome, ${new_person}. You are number ${line_number} in line.`;
}

function nowServing(katzDeliLine) {
  let first_person = katzDeliLine[0];
  katzDeliLine.shift(first_person);
  if (katzDeliLine.length > 0){
    return `Currently serving ${first_person}.`;
  }
  else if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
}

function currentLine(current_line) {
  if (current_line.length > 0){
  let i = 0;
  do {
    "The line is currently: ";
  } 
  while (i < current_line.length);
   return `${i+1}. ${current_line[i]}`;
  }
  
  else if (current_line.length === 0) {
  return "The line is currently empty.";
}
}


