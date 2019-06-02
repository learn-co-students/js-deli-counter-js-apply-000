let katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}


function nowServing(katzDeliLine) {
  if(katzDeliLine.length < 1) return "There is nobody waiting to be served!";
  return "Currently serving " +  katzDeliLine.shift() + ".";
}



// function currentLine(line) {
//   if(line.length < 1) return "The line is currently empty.";
  
//   let str = "The line is currently: "
//   for(let i = 0; i < line.length; i++) {
//     str = str + (i + 1) + ". " + line[i] + ", ";
//   }
  
//   return str.slice(0, -2)
//}

function currentLine(line) {
  if(line.length < 1) return "The line is currently empty.";
  
  for(let i = 0; i < line.length; i++) {
    line[i] = (i + 1) + ". " + line[i];
  } 
  
  return "The line is currently: " + line.join(", ");
}

