let welcoming=[];
function takeANumber(currentLine,name){
  currentLine.push(name)
return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}


function nowServing(katzDeliLine){
   if (katzDeliLine.length===0){
      return "There is nobody waiting to be served!"
   }else{
 return "Currently serving " + katzDeliLine.shift() + "."
  }
}

function currentLine(currentLineName){
  if(currentLineName.length===0) {
    return "The line is currently empty.";
  }
  var lineNames = [];
  for(var i=0; i<currentLineName.length; i++) {
    lineNames.push(i+1 + ". " + currentLineName[i]);
  }
  return "The line is currently: " + lineNames.join(', ' )
}
