var katzDeliLine = [];
function takeANumber(lineOFPeople , name){
  lineOFPeople.push(name);
  return "Welcome, " + name +". You are number "+ (lineOFPeople.length )+" in line.";
  }


function nowServing(katzDeliLine){
  if (katzDeliLine.length>1){
    return "Currently serving " + katzDeliLine.shift()+".";
  }
  else return  "There is nobody waiting to be served!";
}


function currentLine(lineOFPeople){
  let new1 = [];
  for (let i=0 ;  i < lineOFPeople.length  ; i++ )
  new1.push(i+1+'. '+lineOFPeople[i]) ;
  new1 = new1.join(', ');
  if (lineOFPeople.length>1)
  return "The line is currently: " +new1;
  else
  return "The line is currently empty.";
}
