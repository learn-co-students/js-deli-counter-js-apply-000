function takeANumber(currentLine,name) {
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine){
  if (currentLine.length>0){
  return "Currently serving " +currentLine.shift()+"."
}
else {
  return "There is nobody waiting to be served!";
  }
}
function currentLine(line) {
  if (line.length>0) {
    var long="The line is currently: "
    for (let i=0;i<line.length;i++) {
      if (i===line.length-1) {
        long+=`${i+1}. ${line[i]}`
      }
      else {
        long+=`${i+1}. ${line[i]}, `
      }
    }
    return long;
  }
  else {
    return "The line is currently empty."
  }
}
