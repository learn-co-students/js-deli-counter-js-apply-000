let davesDeliline = [];
function takeANumber(currentline,name){

  currentline.push(`${name}`);
  return (`Welcome, ${name}. You are number ${currentline.length} in line.`);
  }
  
function nowServing (line){
    if(line.length === 0){
      return ('There is nobody waiting to be served!');
    }else if(line.length >= 0){return(`Currently serving ${line.shift()}.`)}
  }

function currentLine (line){
  if(line.length < 1){
    return("The line is currently empty.")
  }
  
 var customerAndNumber = [];
   for (var i=0; i<line.length; i++) {
   customerAndNumber.push(i+1 + ". " + line[i])
}
  return "The line is currently: " + customerAndNumber.join(", ");
  
  
}
