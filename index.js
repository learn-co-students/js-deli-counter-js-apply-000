function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
   return "Currently serving " + katzDeliLine.shift()+'.';  
  }
}

function currentLine (line){
  if (line.length === 0){
    return "The line is currently empty.";
  } else {
    var sentence = "The line is currently:";
    for(var i = 0; i<line.length; i++){
      
      if (i !== line.length - 1) {
        sentence = `${sentence} ${i + 1}. ${line[i]},`;
       } else {
       sentence = `${sentence} ${i + 1}. ${line[i]}`;
       }
    }
 return sentence;
  }
}