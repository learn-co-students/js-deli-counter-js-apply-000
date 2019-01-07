var katzDeli = [];
function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name);
    // "Welcome, Ada. You are number 1 in line."
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine){
  if (deliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  // deliLine.shift();
  return `Currently serving ${deliLine.shift()}.` 
}

function currentLine(line){
  if (line.length===0){
    return "The line is currently empty."
  } else {
    for (var i=0;i<= line.length;i++){
       return "The line is currently: " +"1. " + line[0]+ ", "+ "2. "+ line[1]+", 3. "+ line[2]
    }
  }
    //The line is currently: 1. Bill, 2. Jane, 3. Ann"
    
}