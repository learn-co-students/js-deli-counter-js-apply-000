function takeANumber(line,name){
  //add name to katzDeliLine array 
  line.push(name);
  //string interpolation - place in line is index + 1 since counting from zero
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`;
}

function nowServing(line){
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    //remove first person in line and return them
    let customer = line.shift();
    return `Currently serving ${customer}.`;
  }
}

function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    let str = "The line is currently: "
    //iterate through line, add position and name to string
    for (let i = 0; i < line.length; i++) {
      //items before last item in array
      if (i < line.length - 1) {
        str += `${i+1}. ${line[i]}, `;
      }
      //for last item in array
      else if (i == line.length - 1) {
        str += `${i+1}. ${line[i]}`;
      }
    }
    return str;
  }
}